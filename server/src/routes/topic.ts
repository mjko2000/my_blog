import { Request, Response, Router } from "express";
const router = Router();

router.get('/getListTopic',(req,res) => {
  res.status(200).json({
    resultCode: 1,
    data: [
      {
        id: 0,
        title: "First topic",
        url: "love",
        thumbnailUrl: `https://picsum.photos/id/${6}/3000/1600`
      },
      {
        id: 1,
        title: "Second topic",
        url: "hate",
        thumbnailUrl: `https://picsum.photos/id/${7}/3000/1600`
      },
      {
        id: 2,
        title: "Third topic",
        url: "boo",
        thumbnailUrl: `https://picsum.photos/id/${8}/3000/1600`
      }
    ]
  })
})

router.get('/:topic',async (req,res) => {
  const {topic} = req.params
  const posts: any = []
  const rand = Math.floor(Math.random()*10)
  for (let i = 0; i < 11; i++) {
    posts.push({
      id: i.toString(),
      title: await fetch("http://metaphorpsum.com/sentences/"+rand).then(reponse => reponse.text()),
      content: await fetch("http://metaphorpsum.com/paragraphs/"+rand).then(reponse => reponse.text()),
      thumbnailUrl: `https://picsum.photos/id/${i+rand}/1000/600`
    })
  }
  res.status(200).json({
    resultCode: 1,
    data: {
      id: 0,
      title: topic,
      url: "love",
      thumbnailUrl: `https://picsum.photos/id/${12}/3000/1600`,
      posts
    }
  })
})

export default router;