export function generateTimestampBasedUUID() {
	// Generate a random portion (12 characters)
	const randomPart = Math.random().toString(36).substring(2, 14);

	// Get the current timestamp in milliseconds
	const timestamp = Date.now();

	// Convert the timestamp to a hexadecimal string (4 characters)
	const timestampPart = timestamp.toString(16).substring(0, 4);

	// Combine the random portion and timestamp portion
	let uuid = timestampPart + randomPart;

	// Ensure the UUID is exactly 16 characters by padding with zeros if needed
	while (uuid.length < 16) {
		uuid = "0" + uuid;
	}

	return uuid;
}
