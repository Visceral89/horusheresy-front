import styles from "./api-docs.module.scss";
import Sidebar from "./Sidebar";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

export default function Apidocs() {
	return (
		<main className={styles.main}>
			<Sidebar />
			<div className={styles.content} id='content'>
				<h1>API Documentation</h1>
				<p>
					Welcome to the API documentation for the Horus Heresy API. This API
					was made in 2023 by Rasmus Bremholm and started out as en experiement
					in ExpressJS and Supabase but grev into this fullstack app you are
					reading now.
					<br />
					<br />
					To get started read the intro chapter on how to use the API down
					below.
				</p>
				<h2>Quick Start</h2>
				<p>
					The fastest way to get started is by visiting our first API endpoint.
				</p>
				<pre>
					<code>https://horus-heresy-next.vercel.app/api/legions</code>
				</pre>

				<p>
					Here you will find a list of all legions and the data that goes long
					with that legion. Data like Primarchs name, homeworld, size of army
					and what allegence they had during the end of the Horus Heresy.
				</p>
			</div>
		</main>
	);
}
