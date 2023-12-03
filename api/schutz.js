import { redirect } from 'next/navigation';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log(req.body)

        redirect("/fertig.html");
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
