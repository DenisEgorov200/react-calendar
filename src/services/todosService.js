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

export const addTodo = async (id) => {
  const newTodo = { id: 5, date: id, title: 'learn react for 4 hour', completed: false };

  try {
    const todos = await ky
      .post('todos', {
        prefixUrl: 'http://localhost:3000/',
        searchParams: `todos=${id}`,
      })
      .json();

    return todos;
  } catch (error) {
    console.log(error.message);
  }
};
