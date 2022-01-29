import {Post, PostMappingTypeEnum} from "@tribeplatform/gql-client/types";
import {useState} from "react";
import {useAddReply} from "@tribeplatform/react-sdk/hooks";


export const CommentComposer = ({post}: { post?: Post }) => {
    const [text, setText] = useState<string>()
    const {mutateAsync: addReply} = useAddReply()

    return (
        <div>
            <input
                className="shadow appearance-none border lg:rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="What's on your mind?" onChange={event => setText(event.target.value)} value={text}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
                onClick={() => {
                    addReply({
                        postId: post?.id as string,
                        input: {
                            postTypeId: "4DznH0SQ6k2IQUT",
                            publish: true,
                            mappingFields: [{
                               key: 'content',
                               type: PostMappingTypeEnum.HTML,
                               value: JSON.stringify(`<p>${text}</p>`)
                            }],
                        }
                    }).then(() => {
                        setText('');
                    })
                }}
            >
                Add Comment
            </button>
        </div>
    )
}