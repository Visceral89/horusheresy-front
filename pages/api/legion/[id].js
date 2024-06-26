import pool from "../../../app/lib/database";

export default async (req, res) => {
	const legionId = parseInt(req.query.id); // Used req.query instead of req.params

	try {
		const query = "SELECT * FROM legions WHERE id = $1";
		const { rows: legion } = await pool.query(query, [legionId]);
		res.setHeader(
			"Cache-Control",
			"public, s-maxage=3600, stale-while-revalidate=3600"
		);

		if (legion.length) {
			res.status(200).json(legion[0]);
		} else {
			res.status(404).send("Legion not found, try 1-20");
		}
	} catch (err) {
		res.status(500).send("You need more dedicated RAM to the server");
	}
};
