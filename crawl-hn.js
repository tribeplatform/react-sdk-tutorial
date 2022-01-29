const {TribeClient} = require('@tribeplatform/gql-client')
const https = require('https')
const {PostMappingTypeEnum} = require("@tribeplatform/gql-client/types");

const client = new TribeClient({
    graphqlUrl: 'https://app.tribe.so/graphql',
    accessToken: '',
})

const maxItem = 30120143

const fetch = async itemId => {
    return new Promise(resolve => {
        const req = https.request(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`, res => {
            res.on('data', data => {
                resolve(JSON.parse(data.toString()))
            })
        })
        req.end()
    })
}

const createComments = async (item, postId) => {
    if(!item.kids) return

    for(let id of item.kids) {
        const comment = await fetch(id)
        client.posts.reply(postId, {
            input: {
                postTypeId: '4DznH0SQ6k2IQUT',
                publish: true,
                mappingFields: [{
                    key: 'content',
                    type: PostMappingTypeEnum.HTML,
                    value: JSON.stringify(comment.text)
                }],
            }
        })
    }
}

const createPost = item => {
    client.posts.create({
        spaceId: 'dy3eAqs9cDCC',
        input: {
            postTypeId: 'nizYc5RZXWArXJW',
            publish: true,
            mappingFields: [
                {
                    key: 'title',
                    type: PostMappingTypeEnum.TEXT,
                    value: JSON.stringify(item.title)
                },
                {
                    key: 'content',
                    type: PostMappingTypeEnum.HTML,
                    value: JSON.stringify(`<div>Visit: ${item.url}</div>`),
                }
            ]
        }
    }).then(res => {
        createComments(item, res.id)
    })
}

const crawl = async itemId => {
    const item = await fetch(itemId)
    if (item.type === 'story') {
        if (!item.title || !item.url)
            return
        createPost(item)
    }
}

for (let i = 0; i < 10000; i++) {
    crawl(maxItem - i)
}