export function Form() {
  return (
    <>
      <form className="EntryForm">
        <h3>New Entry</h3>
        <label class="FormLabel" htmlFor="Motto">
          Motto
        </label>
        <input className="userinput" />
        <label class="FormLabel" htmlFor="Notes">
          Notes
        </label>
        <textarea className="userinputtextarea" name="Notes" />
        <button type="submit" className="button">
          create
        </button>
      </form>
    </>
  );
}
