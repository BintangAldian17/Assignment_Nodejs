import Posts from "../models/Posts.js";

export const addPost = async (req, res) => {
    const { desc, img } = req.body
    try {
        await Posts.create({
            desc: desc,
            img: img,
            userId: req.id
        })
        res.status(200).json("add post succsess")
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getAllPost = async (req, res) => {
    try {
        const allPost = await Posts.findAll({
            order: [["createdAt", "Desc"]]
        })
        res.status(200).json(allPost)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const deletePost = async (req, res) => {
    const { postId } = req.params

    const findUserId = await Posts.findOne({
        where: {
            userId: req.id
        }
    })
    if (!findUserId) { return res.status(403).json("You can delete only your post") }
    else {
        try {
            await Posts.destroy({
                where: {
                    userId: req.id,
                    id: postId
                }
            })
            res.status(200).json("post deleted")
        } catch (error) {
            res.status(400).json(error)
        }
    }

}