import { useState } from "react";
import Button from "../reusable/Button";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Form Data Submitted:", formData);

		const { name, email, message } = formData;

		try {
			const response = await fetch("https://0911-183-82-33-197.ngrok-free.app/enquiry", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, message }),
			});

			if (response.ok) {
				alert("Message sent successfully!");
			} else {
				alert("Failed to send the message. Please try again.");
			}
		} catch (error) {
			console.error("Error sending message:", error);
			alert("An error occurred. Please try again.");
		}
	};

	return (
		<div className="w-full lg:w-1/2">
			<div className="leading-loose">
				<form
					onSubmit={handleSubmit}
					className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Contact Form
					</p>

					<div className="mb-4">
						<label
							htmlFor="name"
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
						>
							Full Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Your Name"
							aria-label="Name"
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							onChange={handleInputChange}
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Your Email"
							aria-label="Email"
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							onChange={handleInputChange}
						/>
					</div>

					<div className="mb-4">
						<label
							htmlFor="message"
							className="block text-lg text-primary-dark dark:text-primary-light mb-2"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							placeholder="Your Message"
							aria-label="Message"
							rows="6"
							className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
							onChange={handleInputChange}
						></textarea>
					</div>

					<div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
						<Button
							title="Send Message"
							type="submit"
							aria-label="Send Message"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
