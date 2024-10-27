export default function ContactForm() {
  return (
    <form className="bg-white w-full p-5 flex flex-col items-center gap-5 rounded-3xl">
      <input
        type="text"
        placeholder="Name"
        className="w-full border border-gray-400 h-14 pl-4 rounded-xl
      "
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-400 h-14 pl-4 rounded-xl
      "
      />
      <textarea
        placeholder="Leave us a message..."
        className="w-full border border-gray-400 h-60 pl-4 pt-4 rounded-xl
        "
      ></textarea>
      <button type="submit" className="bg-primary text-white py-4 w-2/3">
        Submit
      </button>
    </form>
  );
}
