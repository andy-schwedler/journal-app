import Button from "../Button/Button";

export function Form() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form className="EntryForm" onSubmit={handleSubmit}>
        <h3>New Entry</h3>
        <label class="FormLabel" htmlFor="Motto">
          Motto
        </label>
        <input className="mottoinput" name="Motto" />
        <label class="FormLabel" htmlFor="Notes">
          Notes
        </label>
        <textarea className="notesinput" name="Notes" />
        <Button type="submit" className="button">
          create
        </Button>
      </form>
    </>
  );
}
