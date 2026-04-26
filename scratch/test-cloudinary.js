const cloudName = "dbsiwcyzr";
const apiKey = "192132744896332";
const apiSecret = "5M7WefaCuWUExMwbGYJKnH7mO1E";

const auth = 'Basic ' + Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

async function test() {
    try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?max_results=10`, {
            headers: { Authorization: auth }
        });
        const data = await res.json();
        console.log('Status:', res.status);
        console.log('Data:', JSON.stringify(data, null, 2));
    } catch (e) {
        console.error('Error:', e);
    }
}

test();
