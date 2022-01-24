import {Post} from "@tribeplatform/gql-client/types";
import {ReactComponent as TrashCanIcon} from "../assets/trash_can_icon.svg";
import React from "react";
import {useDeletePost} from "@tribeplatform/react-sdk/hooks";
import {hasScopesPermission} from "@tribeplatform/gql-client/permissions";

export const DeleteNews = (props: { post: Post }) => {
    const {post} = props

    const {mutate: deletePost} = useDeletePost()
    const [canDelete] = hasScopesPermission(post, ["deletePost"])

    if (!canDelete)
        return null

    return (
        <div className="flex flex-col justify-center mr-2">
            <TrashCanIcon className="cursor-pointer" fill="darkred" onClick={() => {
                deletePost({
                    id: post.id,
                })
            }}/>
        </div>
    )
}