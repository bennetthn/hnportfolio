//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Wow! Great Job!"
compliments[1]="Keep it up!"
compliments[2]="Nice!"
compliments[3]="Super cool!"
compliments[4]="You're doing great!"
compliments[5]="Yeah!"
compliments[6]="Awesome!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Which of these sentences is correctly written?"
choice1[1]="there a dog on your porch"
choice1[2]="There\'s dog on your porch"
choice1[3]="There\'s a dog on your porch."
choice1[4]="Theres a dog on your porch"

question[2]="Which of these is not a kind of sonnet?"
choice2[1]="Petrarchan"
choice2[2]="Italian"
choice2[3]="Shakesperian"
choice2[4]="North American"

question[3]="Which of these does not belong?"
choice3[1]="Urban Fantasy"
choice3[2]="Magical Realism"
choice3[3]="High Fantasy"
choice3[4]="Realistic Short Fiction"

question[4]="Which of these is a correct in text MLA citation?"
choice4[1]="(Walters 42)"
choice4[2]="Daniels"
choice4[3]="Hamburger 12"
choice4[4]="(392)"

question[5]="What does ICE stand for in citation format?"
choice5[1]="Inspection Citation Exposition/Explaination"
choice5[2]="Intentionally Copying Essays"
choice5[3]="I Can't Explain"
choice5[4]="Introduce Cite Explain/Expand"

question[6]="Which of these readings is older than 1950?"
choice5[1]="The Horned Toad"
choice5[2]="The Diary of Anne Frank"
choice5[3]="The Hate U Give"
choice5[4]="The Last Unicorn"

question[7]="Which of Dr. Martin Luther King Jr.'s works speaks about his stance on unjust laws?"
choice5[1]="Our God is Marching On"
choice5[2]="I Have a Dream"
choice5[3]="Letter from Birmingham Jail"
choice5[4]="Beyond Vietnam"

question[8]="Which of these was written by an American author?"
choice5[1]="War and Peace"
choice5[2]="Lolita"
choice5[3]="Wind in the Willows"
choice5[4]="Walden"

question[9]="The Last Unicorn is an example of which genre?"
choice5[1]="Postmodern Fantasy"
choice5[2]="Mythological Horror Pastiche"
choice5[3]="Magical Realism"
choice5[4]="Aestheticism"

question[10]="Which of these authors is still alive today?"
choice5[1]="Howard Phillips Lovecraft"
choice5[2]="Ursula K. LeGuin"
choice5[3]="Seanan McGuire"
choice5[4]="Phillip K. Dick"

solution[1]="c"
solution[2]="d"
solution[3]="d"
solution[4]="a"
solution[5]="d"
solution[6]="b"
solution[7]="c"
solution[8]="d"
solution[9]="a"
solution[10]="c"