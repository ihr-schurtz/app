export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log(req.body)
            const filePath = path.join(process.cwd(), 'fertig.html');
            
            // Read the file
            const htmlContent = await readFile(filePath, 'utf8');

            // Send the HTML response
            res.status(200).send(htmlContent);
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
