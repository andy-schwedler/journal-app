export function Main() {
  return (
    <>
      <section className="section">
        <fieldset>
          <legend>New Entry</legend>
          <form className="form--">
            <label htmlFor="Motto">Motto</label>
            <input name="Motto" />
            <label htmlFor="Notes">Notes</label>
            <textarea name="Notes" />
            <button>create</button>
          </form>
        </fieldset>
      </section>
      <section className="entries"></section>
    </>
  );
}
