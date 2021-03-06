// const obj = require('./user')
// console.log(obj.user)
// obj.sayHello()

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // console.log(req.url)
    // res.write('<h1>Hello from NodeJS</h1>')
    // res.write('<h2>Hello from NodeJS</h2>')
    // res.write('<h3>Hello from NodeJS</h3>')
    // res.end(`
    //   <div style="background: red; width: 200px; height: 200px;">
    //     <h1>Test 1</h1>
    //   </div>
    // `)


    //// ..................................
    if (req.method === 'GET') {

        // brauzery haskana vor html formatov enq grum u
        // bachi anglerenich urish lezunery eli haskana 
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
        })

        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'views', 'index.html'),
                "utf-8",
                (err, content) => {
                    if (err) {
                        throw ere

                    }
                    res.end(content)
                }
            )
        } else if (req.url === '/about') {
            fs.readFile(
                path.join(__dirname, 'views', 'about.html'),
                "utf-8",
                (err, content) => {
                    if (err) {
                        throw ere

                    }
                    res.end(content)
                }
            )

        } else if (req.url === '/api/users') {
            res.writeHead(200, {
              'Content-Type': 'text/json'
            })
      
            const users = [
              {name: 'Vladilen', age: 25},
              {name: 'Elena', age: 23}
            ]
      
            res.end(JSON.stringify(users))
          }

    } else if (req.method === 'POST') {
        const body = []

        res.writeHead(200, {
            "Content-Type": 'text/html;charset=utf-8'
        })


        req.on('data', data => {
            body.push(Buffer.from(data))
        })
        req.on('end', () => {
            const message = body.toString().split('=')[1]
            res.end(`
                <h1>Vasha Sabshenie ????????????: ${message}</h1>
            `)
        })
    }

})

server.listen(3000, () => {
    console.log('server is runing...')
})