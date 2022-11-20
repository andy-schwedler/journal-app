export function Main() {
  return (
    <>
      <section className="section">
        <fieldset>
          <legend>New Entry</legend>
          <form className="form">
            <label class="FormLabel" htmlFor="Motto">
              Motto
            </label>
            <input className="userinput" />
            <label class="FormLabel" htmlFor="Notes">
              Notes
            </label>
            <textarea className="userinputtextarea" name="Notes" />
            <button className="button">create</button>
          </form>
        </fieldset>
      </section>
      <section className="entries">
        <article></article>
      </section>
    </>
  );
}
