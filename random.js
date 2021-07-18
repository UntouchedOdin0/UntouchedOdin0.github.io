var tasks = [
    'Write a method that sums two numbers.',
     'Given a number n, write a method that sums all multiples of three and five up to n (inclusive).',
      'Write a method that calculates the factorial of a given number.',
      'Write a program that allows the user to input the name of two cities. The program should then output the first 4 characters of each city in capital letters, separated by a dash. For example, London & Madrid would be: LOND-MADR',
      'Write a program that outputs the sentence: Quick brown fox jumps over the lazy dog. The user can then enter the word to be cut from the sentence. The sentence is then output with the word removed.',
      'Write a program that asks for your age. If you are over 18 it outputs the message, Over 18”, otherwise it outputs, Under 18.',
      'Write a program that reads in the temperature of water in a container in Centigrade and displays a message stating whether the water is frozen (zero or below), boiling (100 or greater) or neither',
      'Write a program that allows you to enter a test mark out of 100. The program outputs FAIL for a score less than 40, PASS for a score of 40 or more, MERIT” for a score of 60 or more and DISTINCTION for a score of 80 or more.',
      'A cash machine dispenses £10 and £20 notes to a maximum of £250. Write a program that shows the user their balance, asks them how much to withdraw, ensures this is a valid amount without going overdrawn and with the notes available and outputs the new balance.',
      'In many RPG games, a number of different sided dice are used, not just the standard 6 sided dice. Write a program that asks the user how many sides a dice has and outputs a random number for that dice.',
      'The computer guesses a number between 1 and 100. The player has to try and guess the number in as few attempts as possible. When the user enters a number they are told if the guess is too high or too low until the number is guessed correctly. The player is told how many guesses they made. Write a program to play the game.',
      'Write a program that outputs the change to be given by a vending machine using the lowest number of coins. E.g. £3.67 can be dispensed as 1x £2 + 1x £1 + 1x 50p + 1x 10p + 1x 5p + 1x 2p.',
    ];
var rand = Math.floor(Math.random() * taks.length);

function showtask(){
    var task = tasks[Math.floor(Math.random()*tasks.length)];
    document.getElementById('task').innerHTML = task.toString(); 
}
