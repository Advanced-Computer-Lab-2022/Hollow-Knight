import { useState } from "react"

const UploadVideo = () => {
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')
    const uploadvideo = async (e) => {
        e.preventDefault()

        const video = {link, description}
        const params = new URLSearchParams(window.location.search);
        const subtitleId = params.get('subtitleId');
        const response = await fetch(`/api/instructors/uploadvideo?subtitleId=${subtitleId}`, {
            method: 'POST',
            body: JSON.stringify(video),
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        const man = await response.json()
        if (response.ok) {
        setLink('')
        setDescription('')

        }

    }

    return (
        <form className="UploadVideo" onSubmit={uploadvideo} >
            <h2> Upload Video</h2>

            <label>Video Link:</label>
            <input
            type="text"
            onChange={(e) => setLink(e.target.value)}
            value={link}
            />

            <label>Description:</label>
            <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            />

            <button>Upload!</button>
        </form>
    )

}

export default UploadVideo