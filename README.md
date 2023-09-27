# Getting Started with Node Server API

## ดาวน์โหลกโปรเจคจาก GitHup  

link : [https://github.com/Nagamiuko/server_short.git](https://github.com/Nagamiuko/server_short.git) 

## เมื่อทำการดาวน์โหลดสำเร็จแล้วให้ทำการติดตั้ง package node_mondules 

โดยใช้คำสั่ง `npm install` ที่ terminal ของ โปรเจค

### `npm install`

เมื่อทำการติตตั้งสำเร็จแล้วโปรเจคก็พร้อมใช้งาน

## Available Scripts

ถ้าต้องการที่จะรันโปรเจค ใช้คำสั่ง

### `npm start`

หรือต้องการที่จะใช้ในโหมดนักพัฒนาสามารถใช้คำสั่ง ` npm run dev ` ได้เลย

### `npm run dev`

รันแอปในโหมดการพัฒนา.\
เปิด [http://localhost:4000](http://localhost:4000) เพื่อดูในเบราว์เซอร์ของคุณ

หน้าจะ โหลด อัตโนมัติ เมื่อคุณทำการเปลี่ยนแปลง.\
คุณอาจเห็นข้อผิดพลาดได้ผ่าน คอนโซล

## Learn More

สามารถดู demo ได้ที่ linK : [https://short-link-wheat.vercel.app/](https://short-link-wheat.vercel.app/)\
ถ้าคุณสนใจที่จะนำโปรเจคนี้ไปพัฒนาต่อ สามารถดาวน์โหลดได้ที่ GitHup ของผมได้เลย 

## Setup Database MongoDB 

คุณต้องทำการสมัครสมาชิก mongodb ก่อนเพื่อที่จะสามารถใช้งาน ฐานข้อมูล แบบ cloud ได้\
สามารถสมัครสมาชิกได้ที่ เว็บไซต์ : [https://www.mongodb.com/](https://www.mongodb.com/)\
เมื่อทำการสมัครอะไรเรียบร้อนสำเร็จแล้วก็ทำการสร้างฐานข้อมูลต่างๆ เสร็จ ก็จะสามารถที่จะเชื่อต่อเพื่อที่จะใช้งาน

เมื่อต้องการที่จะใช้งานก็ทำการ Connecting with MongoDB Driver เลือก Add your connection string into your application code ทำการ copy code mongodb และ นำมาวางที่ file `.env` ตรงที่ `MONGOBD_API` เท่านี้ก็เป็นสำเร็จใช่งานได้


