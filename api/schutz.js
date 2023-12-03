export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log(req.body)
    } else {
        console.log(req.query)
    }
    try {
    console.log(req)
    } catch {}
    
    res.redirect("/fertig.html")
}
