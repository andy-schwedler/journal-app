export function Main() {
  return (
    <>
      <main className="content">
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
        </form>
        <button className="button">create</button>
        <section className="EntriesAndTabs">
          <article>
            <p>All Entries</p>
            <p>C</p>
          </article>
          <article>
            <p>Favorites</p>
            <p>C</p>
          </article>
        </section>
      </main>
    </>
  );
}
