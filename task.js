/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
  {
    name : "Satria Wahyu Ismail",
    age : 22,
    major : "Teknik Informatika"
  },
  {
    name : "Adi Satria",
    age : 24,
    major : "Teknik Informatika"
  },
  {
    name : "Mariam", 
    age : 21,
    major : "Teknik Informatika"
  },
  {
    name : "Faisal",
    age : 22, 
    major : "Teknik Infomratika"
  },
  {
    name : "Febiyanti",
    age : 21,
    major : "Teknik Informatika"
  }
]

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  for(const user of users) {
    console.log(user);
  }
}

/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => {
  if (user && typeof user === 'object' && Object.keys(user).length !== 0) {
    users.push(user);
    console.log(user);
  } else {
    console.log("Invalid user data");
  }
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => {
  if (index >= 0 && index < users.length) {
    users.splice(index, 1, user);
  } else {
    console.log("Index out of range");
  }
  console.log(users);
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
  index >= 0 && index < users.length ? users.splice(index, 1) : console.log("Index out of range");
  console.log(users);
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
