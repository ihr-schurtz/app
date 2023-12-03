export default async function handler(req, res) {
    const now = Date.now();
    await fetch(`https://grand-mink-48089.kv.vercel-storage.com/set/usr${now}`, {
          headers: {
            Authorization: `Bearer AbvZASQgNTkxODAxODYtZTM3ZS00Yjk2LWE1ZTMtODg2NTFkYmE2MDQ0OTk3ZDViYjVjMTQyNDk3OGE3OWIxN2Y3OTI2ZjY4Yzk=`,
          },
          body: JSON.stringify(req.query),
          method: 'POST',
        })

    if (req.method === 'POST') {
        const data = req.body;
        console.log(req.body)
    } else {
        console.log(req.query)
    }
    
    res.redirect("/fertig.html")
}
