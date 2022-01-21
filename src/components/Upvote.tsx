import {Post} from "@tribeplatform/gql-client/types";
import {useAddReaction, useRemoveReaction} from "@tribeplatform/react-sdk/hooks";
import {ReactComponent as TriangleUpIcon} from "../assets/triangle_up_icon.svg";
import React from "react";

export const Upvote = (props: { post: Post }) => {
    const {post} = props
    const {mutate: upvote} = useAddReaction()
    const {mutate: downvote} = useRemoveReaction()

    const reacted = post?.reactions?.some(reaction => reaction.reacted && reaction.reaction === '+1')

    return (
        <div className="flex flex-col justify-center">
            <TriangleUpIcon width="16" height="16" fill={reacted ? "green" : "grey"} onClick={() => {
                reacted ?
                    downvote({
                        postId: post?.id,
                        reaction: '+1'
                    })
                    :
                    upvote({
                        postId: post?.id,
                        input: {
                            reaction: '+1',
                        }
                    })
            }}/>
        </div>
    )
}