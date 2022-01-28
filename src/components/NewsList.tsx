import React from 'react';
import {simplifyPaginatedResult} from "@tribeplatform/react-sdk/utils";
import {Post} from "@tribeplatform/gql-client/types";
import {Link} from "react-router-dom";
import {Upvote} from "./Upvote";
import {useFeed} from "@tribeplatform/react-sdk/hooks";
import {DeleteNews} from "./DeleteNews";

function NewsList() {
    const {data} = useFeed({
        fields: {
            reactions: {
                fields: 'all',
                variables: {
                    limit: 10,
                }
            },
            authMemberProps: 'all',
            createdBy: {
                member: 'basic'
            }
        },
        variables: {
            limit: 10,
        }
    })
    const {nodes: posts} = simplifyPaginatedResult<Post>(data)

    return (
        <div className="lg:w-3/4 m-auto flex flex-col">
            {posts.map((post, i) => (
                <div className="flex gap-2 bg-hacker-body p-2" key={post?.id}>
                    <div className="flex flex-col justify-center">
                        {i + 1}.
                    </div>
                    <Upvote post={post}/>
                    <div className="flex flex-col flex-grow">
                        <Link to={`/${post.id}`}>
                            <div>
                                {post.title}
                            </div>
                        </Link>
                        <div className="flex gap-2 text-xs text-gray-500">
                            <div>
                                By {post.createdBy?.member?.name}
                            </div>
                            |
                            <div>
                                {post.reactionsCount} upvotes
                            </div>
                            |
                            <div>
                                {post.repliesCount} comments
                            </div>
                        </div>
                    </div>
                    <DeleteNews post={post}/>
                </div>
            ))}
        </div>
    );
}

export default NewsList;
