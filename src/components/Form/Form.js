import Button from "../Button/Button";

export function Form() {
  return (
    <>
      <form className="EntryForm">
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
