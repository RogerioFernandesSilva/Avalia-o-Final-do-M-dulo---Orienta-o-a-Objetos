import { User } from "./modules/User";
import { Admin } from "./modules/Admin";

function createUser(
  name: string,
  username: string,
  email: string,
  password: string
): User | null {
  try {
    return new User(name, username, email, password);
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

function createAdmin(
  name: string,
  username: string,
  email: string,
  password: string
): Admin | null {
  try {
    return new Admin(name, username, email, password);
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

const user1 = createUser("Rogerio", "rogerio", "rfs@gmail.com", "1234abcd");
const user2 = createUser("Luke", "luke", "luke@gamil.com", "1234abcd");
const user3 = createUser("Alicia", "alicia", "alicia@gmail.com", "1234abcd");

user1.follow(user3);
user1.follow(user2);

user2.follow(user3);

user1.showFollowers();
user2.showFollowers();
user3.showFollowers();

const tweet1 = user1.sendTweet("Olá mundo");
const tweet2 = user1.sendTweet("Olá Growdevers");
const tweet3 = user1.sendTweet("Growdev é TOP Master!");

user2.sendTweet("Hello world!");
user2.sendTweet("Hello Growdevers");
user2.sendTweet("Growdev is very good!");

user3.sendTweet("Hola mundo");
user3.sendTweet("Hola Growdevers");
user3.sendTweet("Growdev is big tech!");

tweet2.like("rogerio");
tweet3.like("luke");
tweet3.like("rogerio");
tweet3.like("luke");

tweet1.show();
tweet2.show();
tweet3.show();

tweet3.reply("Putz!", "luke");
tweet3.reply("La más vá!", "rogerio");
tweet3.reply("Não digo nada.Só olho é observo", "rogerio");

user3.showFeed();

const admin = createAdmin(
  "Odin",
  "hunsun",
  "hunsun@growtwitter.com",
  "1234abcd"
);

admin.show();
admin.banUser(user2);
user2.showTweets();
admin.unbanUser(user2);
user2.showTweets();
