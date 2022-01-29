import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import {useState} from "react";
import {useAddPost} from "@tribeplatform/react-sdk/hooks";
import {PostMappingTypeEnum} from "@tribeplatform/gql-client/types";
import {useNavigate} from "react-router-dom";


export const Composer = () => {
    const navigate = useNavigate()

    const [data, setData] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const {mutateAsync: addPost} = useAddPost()

    return (
        <div className="w-1/2 mx-auto mt-5">
            <h1 className="text-2xl mb-5">Submit News</h1>
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Title
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
                type="text" placeholder="Title" onChange={event => setTitle(event.target.value)}
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
                Content
            </label>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Whats new?</p>"
                onChange={(event: any, editor: any) => {
                    setData(editor.getData());
                }}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
                onClick={() => {
                    addPost({
                        spaceId: 'dy3eAqs9cDCC',
                        input: {
                            postTypeId: 'nizYc5RZXWArXJW',
                            publish: true,
                            mappingFields: [
                                {
                                    key: 'title',
                                    type: PostMappingTypeEnum.TEXT,
                                    value: JSON.stringify(title)
                                },
                                {
                                    key: 'content',
                                    type: PostMappingTypeEnum.HTML,
                                    value: JSON.stringify(data),
                                }
                            ]
                        }
                    }).then(() => {
                        navigate('/');
                    })
                }}
            >
                Submit
            </button>
        </div>
    );
}