import ky from 'ky';

export const getTodos = async (option) => {
  try {
    const todos = await ky
      .get('todos', {
        prefixUrl: 'http://localhost:3000/',
        searchParams: `date=${option}`,
      })
      .json();

    return todos;
  } catch (error) {
    console.log(error.message);
  }
};

export const addTodo = async (id, date, title, completed) => {
  const newTodo = { id, date, title, completed };

  try {
    const todos = await ky
      .post('todos', {
        prefixUrl: 'http://localhost:3000/',
        json: newTodo,
      })
      .json();

    return todos;
  } catch (error) {
    console.log(error.message);
  }
};
