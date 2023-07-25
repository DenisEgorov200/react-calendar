import ky from 'ky';

export const getTodos = async (option) => {
  try {
    const todos = await ky
      .get('task', {
        prefixUrl: 'http://localhost:3000/',
        searchParams: `date=${option}`,
      })
      .json();

    return todos;
  } catch (error) {
    console.log(error.message);
  }
};
