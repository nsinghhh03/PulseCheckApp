import getCollection from "../../db/db"; // make sure your db connection is correct!

export async function POST(request) {
  try {
    const body = await request.json();

    const collection = await getCollection("users"); // your collection name

    const result = await collection.insertOne({
      ...body,
      timestamp: new Date().toISOString(),
    });

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 200,
    });
  } catch (error) {
    console.error("❌ API submitEntry error:", error);
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
    });
  }
}
