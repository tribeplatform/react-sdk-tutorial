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
                    limit: 100,
                }
            },
            authMemberProps: 'all',
        },
        variables: {
            limit: 100,
        }
    })
    const {nodes: posts} = simplifyPaginatedResult<Post>(data)

    return (
        <div className="w-3/4 m-auto flex flex-col gap-5">
            {posts.map((post, i) => (
                <div className="flex gap-2 bg-gray-100 rounded-lg p-2" key={post?.id}>
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
                        <div className="text-xs text-gray-500">
                            {post.reactionsCount} upvotes
                        </div>
                    </div>
                    <DeleteNews post={post} />
                </div>
            ))}
        </div>
    );
}

export default NewsList;
