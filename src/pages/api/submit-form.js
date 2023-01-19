const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { email,name,token } = JSON.parse(req.body);
    console.log({email})
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name :{
         title: [
          {
            type: "text",
            text: {
              "content": name
            }
          }
        ]},
        Email :{
         rich_text: [
          {
            type: "text",
            text: {
              "content": email
            }
          }
        ]},
        Token :{
         rich_text: [
          {
            type: "text",
            text: {
              "content": token
            }
          }
        ]}
        // nick: {
        //    title: email,
        //    rich_text: email,
        // },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
    console.log({error})
    res.status(500).json({ msg: 'There was an error' });
  }
}