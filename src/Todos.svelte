<script>
  import { addTodo, deleteTodo, logout, firebase } from './index.js'
  import { Doc } from "./sveltefire2"
  export let user;
</script>

<link rel="stylesheet" href="todos.css">

<h1>Hello {user.displayName}!</h1>
<Doc path="/users/{user.uid}" firebase={firebase} let:doc>
  {#if doc.todos.length > 0}
    <div id="todos">
      {#each doc.todos as todo}
        <p class="todo">{ todo } <i id="{todo}" on:click={() => deleteTodo(user.uid)} class="fa fa-times todo-button" aria-hidden="true"></i></p>
      {/each}
    </div>
  {:else}
    <p>You Have No Todos! Add one by entering it in the textbox.</p>
  {/if}

  <p slot="fallback">You Have No Todos! Add one by entering it in the textbox.</p>
  <p slot="loading">Loading...</p>
</Doc>
<form on:submit|preventDefault={() => addTodo(user.uid)}>
  <input type="text" placeholder="Enter TODO here" name="todo">
  <input type="submit" value="Add TODO">
</form>

<button on:click={logout} id="logout"><i class="fa fa-sign-out" aria-hidden="true"></i></button>