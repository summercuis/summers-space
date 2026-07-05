import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";
import TextType from "./TextType";
import "./styles.css";

const basePath = import.meta.env.BASE_URL;
const asset = (path) => `${basePath}${path.replace(/^\//, "")}`;
const page = (path = "") => `${basePath}${path.replace(/^\//, "")}`;
const sectionLink = (hash) => `${basePath}${hash}`;
const currentPath = window.location.pathname.replace(basePath.replace(/\/$/, ""), "").replace(/\/$/, "") || "/";

const publications = [
  {
    text: "Cui, S. (2026). The predicament of saying: Writing the unsayable in interpretivist qualitative educational research. International Journal of Qualitative Studies in Education.",
    doi: "https://doi.org/10.1080/09518398.2026.2698452",
  },
  {
    text: "Cui, S. (2026). Language and time in education: Thinking in the age of generative artificial intelligence. AI & Society.",
    doi: "https://doi.org/10.1007/s00146-026-03148-w",
  },
  {
    text: "Cui, S. (2026). Postdigital education and the GenAI-human relation: Orientalism, paternalism, extractivism. Postdigital Science and Education.",
    doi: "https://doi.org/10.1007/s42438-026-00653-5",
  },
  {
    text: "Cui, S. (2026). From object to home: Rethinking the ontological orientation of Environmental Education. Environmental Education Research.",
    doi: "https://doi.org/10.1080/13504622.2026.2687666",
  },
  {
    text: "Cui, S. (2026). Manufacturing complicity: An analytic autoethnography of emotional labour and moral injury in VET-TESOL education. Journal of Vocational Education & Training.",
    doi: "https://doi.org/10.1080/13636820.2026.2642246",
  },
];

const navCards = [
  {
    title: "Summer",
    subtitle: "Research identity",
    href: sectionLink("#what-i-do"),
    image: asset("media/portrait-01.png"),
    tone: "gold",
  },
  {
    title: "What I do",
    subtitle: "Philosophy x EdTech",
    href: sectionLink("#what-i-do"),
    image: asset("media/portrait-02.png"),
    tone: "sunset",
  },
  {
    title: "Publications",
    subtitle: "My interests",
    href: sectionLink("#publications"),
    image: asset("media/portrait-03.png"),
    tone: "aqua",
  },
  {
    title: "Blog",
    subtitle: "Essays and notes",
    href: page("blog"),
    image: asset("media/portrait-04.png"),
    tone: "coral",
  },
];

const researchDirections = [
  "Technology and education",
  "Philosophy of education",
  "Higher/vocational education",
];

const whatIDoMenu = [
  ["Research Interests", page("research-interests")],
  ["Projects", page("projects")],
  ["Teaching & Service", page("teaching-service")],
];

const researchEssay = [
  "As an only child, I grew up immersed in a quiet no one ever interrupted, turning over whatever lay within reach, curious about everything around me. My father’s anatomy textbooks, my mother’s art books, and my comics were always tangled up together. There was a map of the world in the study, and I once drew a butterfly on it. The butterfly was not a metaphor for anything — in a childhood in the nineties, butterflies were simply everywhere, and a butterfly is easier to draw than a mantis or a snail. To everyone else I seemed a quiet child; I was always thinking, always watching. Though of course, like any child, I also draped a blanket over my head and played at being someone off the television.",
  "So what does experience mean? I have made butterfly specimens; I have seen caterpillars; but the moment of transformation itself I have never actually seen. Once, in Melbourne, thinking about questions like these, a curtain suddenly came down. I stood watching it, unbearably on edge. The curtain was meant to be where it had always been — and it had fallen, and I did not know how to fix it. Why had it come down? What was wrong with it? I couldn’t bear it. For the first time I walked into a Bunnings, bought a few tools, and went home to mend it myself. Why had I never run into anything like this before? In all the days I once spent alone at home, none of it had ever happened — or was it simply that I had grown up?",
  "I never saw it happen — not the butterfly, not the curtain, not whatever it is that turns a child who waits to be looked after into someone who buys her own tools. Only the before, and the after, and me somewhere in the middle of it, holding a screwdriver I hadn’t known I owned.",
  "All of this, I suspect, is what shaped what I now study. I feel a closeness to Heidegger’s phenomenology — to the way a curtain, like a hammer, only announces itself when it stops working; to Dewey’s pragmatism, in which we come to know a thing by doing it, tools in hand; to Hans Jonas’s philosophy of life, which takes seriously the caterpillar, the organism, the sheer strangeness of a being that remakes itself; and, past all of these, to whatever room philosophy keeps for questions that refuse to close.",
  "In what we now call the digital — or, as some prefer, the postdigital — age, the old question only sharpens: what does experience mean, when so much of the doing can be done for us? Had I never walked into that shop, had the curtain been quietly mended before I noticed it had fallen, would I have grown up at all? That, more or less, is what I study — what becomes of experience, and of the one who undergoes it, when the moment of transformation is not only unseen, as it always was, but increasingly carried out somewhere else.",
];

const makeParagraphs = (text) => text.trim().split(/\n+/).map((paragraph) => paragraph.trim()).filter(Boolean);

const teacherWorkText = `
It is easier for other people to understand me, what I know and what I do, that is, what kind of person I am, through my occupation.
"What do you do? And your supervisors?"
At certain moments I put it briefly: I am an English teacher, and my teachers are a physical education teacher and a science teacher. Sometimes the other person pauses; sometimes they say, "So what is the connection between you?"
The meaning behind the question is not hard to grasp. I believe my supervisors, like me, do not mind questions of this kind. Of course, I could say plainly that my teachers and I are all interested in philosophy, including sociology. But conversations like this tend to move in a direction that is less suited to the social occasion at hand, at least in my experience.
At different times, teachers of different subjects have all expressed something like the question, "what is it that my work actually is." When I have been utterly exhausted, I too have said: "I am an English teacher who does not want to be an English teacher."
That sentence does not mean I truly detest English teaching. It means that the title "English teacher" often cannot hold what I actually go through in teaching. It is too narrow. It leads people to think my work is teaching vocabulary, grammar, writing structure, exam technique, or moving a student from IELTS 5.5 to 6.5. But the experience of teaching has never been only these things.
In the talk that complains about how exam-driven aims distort education, in the settings where teachers are expected to do certain things, in the many tangled demands of administrative work, teaching itself is an experience that is hard to understand from the outside.
Sometimes online I see someone complain: "If this person is a teacher, then this person is going to be quite a handful." The setting might be a hospital, a supermarket, or some other public place. The comments say: "These teachers are used to keeping other people in line, they never leave the campus themselves, and they are barely socialised."
Hmm. What I think about is this: the so-called being used to keeping others in line (doing), and being unclear about the world outside (knowing), are built on top of teacher as a label. People see the label first, and from the label infer a being: what kind of person this is.
The trouble with a label is that it breeds expectation and resentment, while overlooking the person's very being.
A teacher's work of course includes role-play and blame in the worldly and even political sense. Teachers are expected to be responsible, expected to be patient, expected to be moral, expected to understand students, expected not to make mistakes, expected to "know how to teach," expected to manage order, expected to respond to policy, expected to raise results, expected to attend to emotions, expected to obey the system, and at the same time expected to change the system.
But if teachers are understood only within these expectations, the teacher becomes a function.
As if a teacher's work were only moving knowledge from one place to another, moving students from one state to another, folding curriculum, assessment, feedback, attendance, wellbeing, academic integrity, AI policy, employability, and inclusion all into one manageable set of processes.
Understanding it this way is not entirely wrong, of course. Teachers do indeed do these things. Teachers do prepare, teach, mark, explain, correct, soothe, remind, record, attend meetings, write emails, fill in forms. Teachers do have to face the system, exams, students, parents, colleagues, the school, policy, the market, and even public opinion.
But a teacher's work does not equal the sum of these things.
More precisely, a teacher's work happens within the process of a person trying to enter some state of learning. This process is not only knowing what, and not only doing what, but how this person becomes a person who is learning.
I feel more and more that a teacher's work is not as simple as teaching a piece of content, but is taking part in a kind of becoming: the student is becoming a certain kind of student, and the teacher too is becoming a certain kind of teacher.
An English teacher, for instance, seems to be teaching language, but what happens in the classroom is often not only language. A student who dares not speak may not simply lack vocabulary; a student who leans on AI may not simply be lazy; a student who keeps asking "is this written correctly" may not simply be unable to write; a student who stays silent may not simply be without ideas.
Behind these behaviours there is often a being: who am I? Am I safe here? Am I entitled to speak? What happens if I get it wrong? What kind of student should I be like? Can I become the kind of student that is recognised here?
So, in my PhD project, I am reluctant to understand students merely as ‘students who use AI’ or ‘students who do not use AI.’ What I care about more is: how they, as Chinese international students in Australian higher education, go through a reorganising of being, doing, and knowing.
And teachers, in fact, are the same.
An English teacher is not only ‘teaching English.’ A physical education teacher is not only "teaching sport." A science teacher is not only "teaching science." These subjects matter, of course, but the subject is only an entrance. Through this entrance, what the teacher actually faces is how a person enters a world, how they learn to act, judge, express, fail, revise, and carry on in this world.
This is also why I can understand, more and more, the connection between my supervisors and me. On the surface, our "subjects" differ: English, physical education, science. But look a little deeper, and we are all concerned with the way human beings exist in education. What we care about is not only what students learn, but how students become a certain kind of person in learning. What we care about is not only whether teaching methods are effective, but what teaching means as a way in which a human being and the world meet.
So, when someone asks "what is the connection between you," I could of course say: we are all interested in philosophy.
But a more accurate answer might be: none of us quite believes that education can be fully explained by subjects, skills, outcomes, or metrics. All of us, in some sense, keep asking what is actually happening in education.
A teacher's work, perhaps, hides within this "happening."
This is also why teachers are so often tired. Because what a teacher faces is not a clean, controllable, linear object of work. What a teacher faces is people. A person is not a device between input and output. People misunderstand, fear, resist, depend, perform, fall silent, suddenly catch on, and suddenly fall apart. A teacher's work is often not the steady delivery of something pre-set, but continuous judgement in unpredictable situations: what does this student need right now? Should this be said or not? Should this mistake be corrected or not? Should this silence be broken or not? Is this standard fair? Is this demand excessive? Is this person avoiding, or actually trying?
These judgements are hard for outsiders to see.
From the outside, a teacher seems only to be standing there talking. Or sitting there marking. Or organising activities in the classroom. Or replying to students in emails.
But what a teacher really does, much of the time, is judge a relationship: the relationship between knowledge and the student, between the student and the system, between the student and themselves, between the teacher and the student, between teaching and the world.
For this reason, a teacher's work is not simply keeping people in line. Of course a teacher must sometimes manage the classroom, and must handle rules. But to understand a teacher as someone "used to keeping others in line" is to take the most surface, most visible, and most easily resented part of education as the whole of a teacher's work.
A teacher's work is also not simply imparting knowledge. Of course a teacher must know some things, and must help students know some things. But if knowledge is only transmitted, then a teacher is easily replaced: a textbook can transmit, a video can transmit, AI can transmit too. Yet the problem of teaching has never been whether there is information. The problem of teaching is: how does this information become something understandable, bearable, usable, and transformable within this student's life?
There is a very fine kind of work in this.
A teacher may have explained a concept, but the real teaching happens when a student suddenly realises: "so I am allowed to think like this."
A teacher may have corrected a sentence, but the real teaching happens when a student realises: "it is not that I cannot express myself, I just have not found the way yet."
A teacher may have arranged a discussion, but the real teaching happens when a student feels, for the first time: "my experience can also become part of knowledge."
A teacher may have said something quite ordinary, but what a student remembers years later may not be the sentence itself, but the moment they were allowed to keep trying.
So a teacher's work is sometimes like translation. Not translation between languages, but translation between worlds. A teacher translates a world of knowledge for the student, and translates the student's confusion back into teaching itself. A teacher has to know why a student does not understand, and also has to know that "not understanding" is not always a cognitive problem; it may be an emotional problem, an identity problem, a historical problem, a language problem, a power problem, or it may simply be that this person has not yet found the door into this world.
A teacher's work is also sometimes like receiving a guest. Not the surface politeness of hospitality, but letting a person enter a space that did not originally belong to them. The classroom, the university, academic writing, English, research, discussion, critical thinking, these things are not naturally open to many students. What a teacher has to do is not simply say "the door is there, come in yourself," but to judge: where is this person standing right now? Can they see the door? Do they have the strength to walk over to it? Do they know what will happen once they go in? Have they once been humiliated at a doorway like this?
A teacher's work is also sometimes like bearing witness. A student's growth cannot always be quantified, and not every effort turns into a grade. A teacher often witnesses very small changes: a student asking a question of their own accord for the first time; a student moving from total reliance on templates to daring to write their own judgement; a student moving from fear of being wrong to willingness to try to speak; a student moving from treating AI as an answer machine to beginning to treat it as a partner in dialogue; a student moving from "I can't" to "I can give it a try."
These changes are small, but they are not small matters.
Of course, I do not want to romanticise teachers either. A teacher is not an angel, nor a naturally nobler kind of person. Teachers get tired, get irritated, lose patience, and get trained by the system into a kind of functional role. Teachers can also harm students, oppress students, misunderstand students. Education is not naturally good, and teaching is not automatically just.
But precisely for this reason, a teacher's work needs to be understood more seriously. It is not a moral halo, nor a simple extension of the service industry. It is a kind of work that stands between knowledge, the system, relationships, and the coming-into-being of a person.
In this sense, "what is a teacher actually doing" is not an easy question to answer.
A teacher teaches, but does not only teach.
A teacher manages, but does not only manage.
A teacher explains, but does not only explain.
A teacher assesses, but does not only assess.
A teacher accompanies, but does not only accompany.
A teacher, in a concrete educational setting, works through the question of "how to become," together with students.
How to become a person who can speak.
How to become a person who can learn.
How to become a person who can judge.
How to become a person who can face uncertainty.
How to become a person who is not wholly swallowed by the system within the system.
How to become a person who, before knowledge, is both humble and yet does not cancel themselves out.
This is also why, when I say I am an English teacher, I am not only stating my occupation. I am also saying that I have long stood in a particular position: I see how people enter, or are excluded from, a certain world because of language; I see how students train themselves into "good students"; I see how exams shape a person's fear; I see how AI changes students' understanding of learning, authorship, and ability; I see how teachers, between the demands of the system and the complexity of human beings, search again and again for a practice that can still be called education.
So perhaps a teacher's work is not a fixed answer.
It is more like a question.
Each time they walk into the classroom, a teacher answers this question anew: today, before these people, within this system, within these constraints, how can I still let education happen?
And this question has no easy answer.
But precisely because it has no easy answer, a teacher's work is not just a label. It is not a "managing people" occupation, nor a "delivering knowledge" occupation, and still less an identity that can be easily summed up by outside resentment.
A teacher's work is to carry, within a person's becoming, a responsibility that is unstable but real.
This responsibility is not always grand, and not always seen. It may be only a patient explanation, a correction without humiliation, a wait through silence, a taking-seriously of a student's experience, an effort that still treats the student as a human being beyond the language of the system.
So, when I say “I am an English teacher who does not want to be an English teacher,” I might now understand myself more gently.
What I do not want to be may not be an English teacher.
What I do not want to be is that English teacher flattened by the label: responsible only for grades, serving only exams, executing only the curriculum, completing only administration, simplified in other people's imagination into someone "used to keeping others in line."
But I am still willing to be a teacher.
A teacher who still asks what is actually happening in teaching.
A teacher who knows that ‘English’ is only an entrance, and that how a person becomes themselves between language, knowledge, and the world is the harder and more important question.
`;

const beingTrueText = `
The question I actually have
I keep saying I care about truth. I care about the difference between a thing being true and a statement being true about it. Real gold is true gold before anyone says a word. The sentence "this is gold" comes afterwards. My hunch is that most talk about truth-telling quietly skips the first thing and argues only about the second. And in skipping it, it also skips the event I most want to look at, which I am going to call truth-showing.
Three words to keep apart the whole way through:
truth-seeking — going after something hidden, trying to find it.
truth-showing — the moment the hidden thing comes into view, shows itself as something.
truth-telling — saying it to someone, in a sentence that can be checked.
My claim to myself: telling gets all the attention, seeking gets some, and showing (the middle, the one that does the real work) gets forgotten. Logos is the word that lets me see why.
Five senses of ‘truth,’ and which one the tradition promotes
Heidegger (2010) lists several everyday senses of the word truth. Paraphrasing his list so I remember it:
truth as a property of a statement (the sentence expresses things as they are);
truth as the statement itself (‘2+2=4’ is a truth);
truth as knowing a truth (‘he can’t handle the truth’ = he hides from knowing it);
truth as the whole set of true statements about something (‘the truth about what happened’);
truth as the genuine — ‘true gold,’ ‘the true God,’ where a thing is called true when it really is what it claims to be.
Four of these point at sentences. Only the fifth points at the thing itself. And Heidegger (2010) says the tradition puts its weight on the sentence-senses: the priority goes to the sense of truth tied to propositional statements. So the ordinary pull of the word runs away from the gold and toward the correct sentence. What I want to do is drag it back the other way.
The fifth sense is what I mean by being-true. Gold is true by standing in its own being as what it is. My saying so adds nothing to the gold. Being-true is underneath all the sentence-senses, and it is where I want to start.
Truth first means un-hiddenness (ἀλήθεια)
Underneath even the gold, Heidegger (2010) puts one more thing. Before truth is any kind of property, it is the un-hiddenness of beings. Most of the world sits in concealment most of the time. Something gets drawn out of hiding and comes to show: that drawing-out is what the Greeks called ἀλήθεια (alētheia, literally ‘un-concealment,’ un-hiddenness). His line, worth keeping: the uncoveredness of beings is what we call truth (Heidegger, 2010).
Once that is in front of me, correctness looks like a late and small case. The sciences chase ‘what-is-true’ inside their own patch (which chemicals, which dates). The deeper enquiry asks after the truth of what-is-true (Heidegger, 2010): what makes a true thing true at all. Heidegger (2010) is blunt about a historical accident here. The true proposition, and especially mathematical knowledge, became the model for what truth is. One narrow form of truth got crowned, and after that, ‘enquiring into truth’ quietly turned into ‘checking sentences for correctness.’ The gold went missing; the certificate of authenticity took its place.
Simple version for myself: being-true (genuine, un-hidden) is the ground floor. Correctness (the fitting sentence) is a room built much later on top. Truth-telling lives in that upper room and forgets there is a ground floor.
Logos: saying that shows, not saying that reckons
Here is where logos earns its place. I can drop the ‘logos of logos’ framing entirely and logos still sits at the centre of the whole thing.
λόγος (logos) comes from the verb λέγειν (legein), which means ‘to say,’ and under that, ‘to gather,’ even ‘to pick out’ (Miller, 2023). From the same root grow the words for calculating and giving reasons. Miller (2023) puts the basic sense plainly: a logos is at root a word or a discourse, close to what we would call a speech act (p. 14). Over time it hardens into the idea of a complete account of something, the way ‘biology’ is meant to be the full account of life, so that a proper logos matches the nature of whatever it is about (Miller, 2023, p. 15).
There is a second memory buried in the word, and it is the ancestor of truth-telling. In Athens, an official leaving office had to hand the people a logos of his actions and spending: an accounting, ordered, and open to challenge in court (Miller, 2023). Logos as reckoning. Logos as the correct record you can be prosecuted over. That civic sense already leans toward the said, toward the checkable report.
What that reckoning-sense forgets is the sense Heidegger keeps digging back to: λόγος as ἀποφαίνεσθαι (apophainesthai), letting something be seen, showing something as something. On his reading, logic studies speaking insofar as speaking uncovers things (Heidegger, 2010). Speech matters because it shows. Correctness is only one shape the showing can take.
The cleanest proof he gives is the little word ‘is.’ Say the chalk is white. The ‘is’ looks like grammar-glue joining subject to predicate. Heidegger (2010) refuses that reading: the ‘is’ is not a copula but the mark of what a statement basically does, which is making-present, letting the being stand there and be seen. Even a boring sentence is already a small act of showing. The tradition reads it as mere predication and walks straight past the showing.
Why truth-telling is a pseudo-problem
Now I can say the thing cleanly to myself.
Truth-telling lives entirely in the said. It asks: does the sentence match? is the speaker honest? can the report be trusted? Every one of those questions assumes the thing has already been un-covered — already shown, already standing there as something a sentence could be about. Truth-telling starts one step after truth has happened. Fretting about telling the truth while taking the showing for granted resembles arguing about the wording on the certificate while never once looking at the gold.
Truth-telling has truth-seeking folded inside it. You cannot tell what you have not found, so telling always leans back on a prior seeking, a reaching-after the hidden. That much people notice. But seeking and telling share one blind spot: both stare at the content — the found thing, the sayable result. Seeking gets judged by what it finds. Telling gets judged by what it delivers. And the event that turns the hidden into the sayable, the showing (ἀπόφανσις), falls out between them, unthought. We reward the search, we police the report, and the letting-appear that carries a being out of hiding and into speech goes unnoticed.
Levinas gives me the words for the gap. There is a pre-ontological weight of language that marks the difference between ‘the said’ and ‘the saying’ (Levinas, 1981, p. 43, as cited in Schrag, 2007, p. 487). Truth-telling is a discipline of the said. The saying — the showing that happens in the act of speech, before it cools into fixed content — is exactly what truth-telling cannot register, because truth-telling only counts sayings that have already hardened into records.
Braunstein sketches where a world like that ends up: a present full of words that can be said but land without effect, where people are counted yet do not count, reduced to ticking yes or no on a survey (Braunstein, 2020, p. 230). Correct sayings everywhere; almost no un-concealment. A culture drowning in truth-telling and starved of showing.
So the problem is false not because it asks nothing, but because it asks its question inside the upper room and mistakes that room for the whole house. It treats correctness as the place truth happens, when correctness is only what is left over after truth has already happened, cooled and set.
Truth-showing, with two examples I already trust
If seeking looks back at the hidden and telling looks forward to the said, then showing is the turn between them, and it deserves its own name. The place where a being crosses from concealment into the ‘as,’ and becomes available to be said at all.
Heidegger (2010) gives the statement three layers: pointing-out, then predication, then communication. Pointing-out (ἀπόφανσις) comes first: bare letting-be-seen. Predication (‘this as that’) and communication (telling someone) are built on top of it. Truth-telling is only the top two. The bottom one does the un-covering, and it is the one that ‘goes without saying’ — in the exact sense that it goes without being said.
Two examples from my own notes, because they help me feel it:
The table. First I am moving around the room and the table shows up as part of what I am doing: a surface, an edge, somewhere to put things, all fused into the situation. Heidegger's word for that first jumbled, undifferentiated showing-up is συγκεχυμένον (sygkechymenon, ‘poured-together,’ un-sorted). Then I stop and define it: ‘a table = furniture with four legs and a flat top for holding things.’ That definition is ὁρισμός (horismos, ‘definition,’ drawing a boundary). The definition is useful, and it is second. It sorts and fixes what first showed up unsorted. A particular kind of organising had to happen for me to see the table clearly as a table.
Boredom. First there is a vague, spread-out flatness over everything, no edges to it (sygkechymenon again). Then I define it: ‘boredom = a mental state of low interest in the present object.’ The definition lets me talk about it and even measure it. It also loses the original thing — that grey mood soaking the whole afternoon — by trimming it into a tidy object.
Both examples show the same double move. Defining un-covers one face of the thing (now I can say it, check it, share it) and in the same motion covers over the fuller way it first showed up. Heidegger's chalk does exactly this: when I say ‘the chalk is white,’ the ‘what-it-is’ gets taken only from the thing itself and fixed as just-there, while the chalk-I-was-writing-with drops out of view (Heidegger, 2010). Showing reveals one side by letting the others fall back into the dark.
That double move is the whole reason showing cannot be reduced to correctness. Correctness asks only whether ‘white’ fits. Showing is the entire event by which the chalk comes to stand there as something a predicate could fit in the first place — and that event both reveals and conceals. Truth-telling keeps no room for the concealing half. It assumes a fully-lit object and asks only whether the sentence about it is right. Truth-showing keeps the shadow in the picture.
Being-true is timed; correctness freezes it
The last piece pulls being-true away from correctness through time, and it is the piece I most want to hold onto.
Heidegger (2010) lets the old equations stand in their hardest form so he can show their limit:
being = presence;
truth = the now-present;
and presence-now is treated as the highest mode of being (Heidegger, 2010, p. 175).
Line them up and truth collapses into a single tense: the now. The fully-present, fully-lit, standing-here-this-instant. He offers this as the tradition's confession, not his own home. The unspoken ground of the old logic, he says, is a specific sense of time bent entirely toward making-present, with the Greek ideal of knowledge as pure seeing of what stands present as its extreme (Heidegger, 2010). All the truth of that logic is the truth of a correct grasp of what lies before the mind right now.
Here is what I think being-true keeps that correctness throws away. ‘2+2=4’ is correct regardless of when it is thought — and that very time-indifference is its confinement to a thin now, a present with no past weighing on it and no future opening from it. Being-true is an event, and events have tense. Something comes to show, which means it was hidden and could hide again. Un-concealment always implies the concealment it came out of and the concealment it can fall back into. To call a phenomenon ur-temporal, in Heidegger's (2010) phrase, is to say not that it happens in time but that it is shaped through and through by time. Being-true is timed in just that way: it happens, it can be lost, it has to be won again. Correctness can hold still only because it has already dropped the time out.
(Note to self: this is also the buried link to the ontological difference material — the difference between ideal being and real being that Käufer (2005) works through, and the topos–logos pairing in Karamercan (2023). Both belong in the longer version, not here. Park them.)
Where this leaves me
The shape I keep landing on, in plain order:
being-true — the genuine, un-hidden thing standing as what it is (the gold). First.
truth-showing — the letting-appear (ἀπόφανσις) that turns it into something sayable. The middle. The one that does the work and gets skipped.
truth-telling — the fitting, checkable, shareable sentence (correctness). Last.
Truth-telling sets up in stage three and calls stage three ‘truth.’ It even keeps a memory of stage one, folded in as truth-seeking, the reach toward the hidden. What it loses is stage two, the showing — and losing the middle is what turns it from a partial account into a false one. You cannot get from seeking to telling without passing through showing, and showing is the part no correctness can measure, because correctness is only one of showing's later moods.
Logos is what lets me keep all three in one frame. Logos, at root, is the showing — λέγειν as letting-be-seen, before it ever became reckoning, account, or the giving of correct reasons. Keep logos as showing, and the tradition's whole promotion of correctness reads as one long forgetting of what speech first does: the Athenian handing over his logos-as-accounting, the true proposition crowned as the model of truth, the survey subject reduced to yes or no. One line, one steady covering-over of showing by the said.
The question to carry forward (open, not closed): can truth-showing be turned into a demand on writing itself — so that a sentence would answer for the showing it performs, and not only for the correctness it claims? That would ask a sentence to let its own shadow be felt, to keep the hidden face of the chalk somewhere in view even while saying the chalk is white. Whether writing can be held to that, and what it sounds like when it is, is the thing I am circling. Van Manen (2006) calls this pull ‘the demands of writing’ (p. 713), but I’m afraid that much ‘phenomenological writing’ only performs the logos it claims to follow. The gold is true before I speak. My question is whether my speaking can let it stay gold.
I’m still pondering this.
References
Braunstein, N. A. (2020). Jouissance: A Lacanian concept. SUNY Press.
Heidegger, M. (2010). Logic: The question of truth (T. Sheehan, Trans.). Indiana University Press. (Confirm translator/edition and original publication year against your copy.)
Käufer, S. (2005). The nothing and the ontological difference in Heidegger's What is Metaphysics? Inquiry, 48(6), 482–506.
Karamercan, A. O. (2023). Heidegger's question of being: The unity of topos and logos. Sophia, 62(2), 309–325.
Levinas, E. (1981). Otherwise than being or beyond essence (A. Lingis, Trans.). Springer.
Miller, P. A. (2023). In the beginning was the logos: Reason and revolution. The Comparatist, 47(1), 11–31.
Schrag, C. O. (2007). Discourse about difference. In C. V. Boundas (Ed.), Columbia companion to twentieth-century philosophies (pp. 479–488). Columbia University Press.
van Manen, M. (2006). Writing qualitatively, or the demands of writing. Qualitative Health Research, 16(5), 713–722. (Details from memory — confirm volume/pages.)
`;

const truthArticleHeadings = new Set([
  "The question I actually have",
  "Five senses of ‘truth,’ and which one the tradition promotes",
  "Truth first means un-hiddenness (ἀλήθεια)",
  "Logos: saying that shows, not saying that reckons",
  "Why truth-telling is a pseudo-problem",
  "Truth-showing, with two examples I already trust",
  "Being-true is timed; correctness freezes it",
  "Where this leaves me",
]);

const truthReferenceEntries = [
  ["Braunstein, N. A. (2020). ", { em: "Jouissance: A Lacanian concept" }, ". SUNY Press."],
  ["Heidegger, M. (2010). ", { em: "Logic: The question of truth" }, " (T. Sheehan, Trans.). Indiana University Press."],
  [
    "Käufer, S. (2005). The nothing and the ontological difference in Heidegger's ",
    { em: "What is Metaphysics?" },
    " ",
    { em: "Inquiry, 48" },
    "(6), 482-506.",
  ],
  [
    "Karamercan, A. O. (2023). Heidegger's question of being: The unity of topos and logos. ",
    { em: "Sophia, 62" },
    "(2), 309-325.",
  ],
  ["Levinas, E. (1981). ", { em: "Otherwise than being or beyond essence" }, " (A. Lingis, Trans.). Springer."],
  [
    "Miller, P. A. (2023). In the beginning was the logos: Reason and revolution. ",
    { em: "The Comparatist, 47" },
    "(1), 11-31.",
  ],
  [
    "Schrag, C. O. (2007). Discourse about difference. In C. V. Boundas (Ed.), ",
    { em: "Columbia companion to twentieth-century philosophies" },
    " (pp. 479-488). Columbia University Press.",
  ],
  [
    "van Manen, M. (2006). Writing qualitatively, or the demands of writing. ",
    { em: "Qualitative Health Research, 16" },
    "(5), 713-722.",
  ],
];

const blogPosts = [
  {
    slug: "zoo-as-screen",
    date: "01 May 2026",
    title: "Zoo as screen",
    excerpt: "when the closeness is delivered entirely by machines, what do the machines actually make?",
    image: asset("media/blog-zoo-as-screen.png"),
    figures: [
      {
        src: asset("media/blog-zoo-figure-01.png"),
        label: "Figure 1",
        caption: "Werribee safari bus and the giraffe through the phone.",
      },
      {
        src: asset("media/blog-zoo-figure-02.png"),
        label: "Figure 2",
        caption: "The animal collage after the zoo.",
      },
      {
        src: asset("media/blog-zoo-figure-03.png"),
        label: "Figure 3",
        caption: "The same afternoon as a comic panel.",
      },
      {
        src: asset("media/blog-zoo-figure-04.png"),
        label: "Figure 4",
        caption: "Sailor warriors on drink cans.",
      },
      {
        src: asset("media/blog-zoo-figure-05.png"),
        label: "Figure 5",
        caption: "Ultraman and Goku on the shelf.",
      },
    ],
    paragraphs: [
      "A zoo is a place people go to be near animals. Everything that arranges the nearness, the bus, the fence, the raised path, the phone in my hand, the editing app on the phone, the cartoon drink can in the grocery, is a piece of technology. So here is the question: when the closeness is delivered entirely by machines, what do the machines actually make? The animal? Me? Or some relation between us that neither of us asked for?",
      "I am on the safari bus at Werribee and a giraffe stands a few metres off, out in the open, and I am watching it through my phone. The giraffe is right there. In my hand is a small bright rectangle of the giraffe, and that is what I am looking at. Almost everyone on the bus is holding up the same rectangle. It would be easy to make this a story about distraction, about how we have forgotten how to just look. I want to resist that story, because the story is too flattering. It assumes there was a direct giraffe available to me, and that I chose the screen over it out of some modern weakness. The truth is quieter and stranger. The available giraffe was already a managed one. The bus, the open range, the measured distance, the whole design had arranged how the animal was allowed to appear before I lifted my phone. I was going to receive the giraffe as a sight either way. The phone made the arrangement plain by adding one more sheet of glass to the glass already there.",
      "This is the thing about the apparatus. It presents itself as a way of bringing you close, and closeness is exactly what it manages, meters, and holds one step short of happening. In Guangzhou I grew up going to Chimelong, the safari park where a small sightseeing train carries you through the enclosures while the animals stand or sleep a careful distance from the rail. For years I thought of that train as a private childhood detail, something belonging to one city and one girl. The train belongs to no city in particular. Werribee has its bus, Chimelong has its train, and the sameness is the point. Both are machines for moving a human body past an animal body along a fixed path, close enough to see, arranged to stay beyond touch. The form travels. What it produces is a reliable, repeatable, safe encounter with something that is supposed to be wild.",
      "Look at what the encounter becomes once I take it home. Here is the collage I assembled that evening. Ostrich, zebra, rhino, gorilla, a lion asleep in the bark, and along the bottom in soft gold script, a line I added: you are backlit with all the good things in this world. Read who that sentence is about. The rhino has no idea it is backlit with anything. The line faces me. I drove to the edge of the city to see a rhinoceros and I came back with a sentence about my own life, and somewhere in the editing the rhino slid into place as the lighting for it. Then the same afternoon became a comic. BOOM. POW. SUPER FUN. A speech bubble where I tell my friends I love them and the day is saved. The hand painted signs inside the park had already turned a lion into a cheerful yellow shape with an arrow, a cartoon before I arrived, and my hands carried the cartoon one step further, until the visit was a panel in a story where I play the happy hero.",
      "A few days later the fridge in the Asian grocery is full of the identical operation. Sailor warriors named for the planets and the moon. Goku frozen at the peak of a transformation. Ultraman, whose whole existence is to fight the giant monsters, shrunk to a smiling figure on a can of pear soda for two dollars ninety nine. These are beings of force and metamorphosis, the kind of thing meant to be too large or too fierce to hold in the hand, and here they are, sized to fit the hand, sweet, drinkable. I buy the pear one. I want to be exact about where I stand in this. I am one more pair of hands reaching into the fridge, doing to Goku what the bus did to the giraffe.",
      "Now I can say what the machines make, and it is why mirror is the wrong word. A mirror returns a self that already stood there. These devices go further. The bus, the phone, the filter, the caption, the can, they manufacture a particular me and a particular animal in one motion and hand me both as a discovery. The me they produce is the feeling one, the moved and grateful tourist, backlit with good things. The animal they produce is the one that fits inside that feeling, cute, cooperative, available, complete. The giraffe as image and I as its warm spectator come off the same press.",
      "This also names the single thing the circuit is built to withhold. To really see an animal would be to stand where it could see me back, where its look could land on me and find me wanting, or find me beside the point, or pass over me the way it passes a fence post. Sight that is bodily and mutual exposes the one who looks. Glass and a lens keep that exposure away. On the bus I watch the giraffe in complete safety, because the giraffe watches nothing, and its indifference stays sealed behind the frame. Cuteness is my name for this whole arrangement. A cute thing is an other with its power to unsettle switched off. Goku on the can, the lion on the sign, the rhino in the gold light, the giraffe in the rectangle, each has had the same faculty removed, the faculty to look back and disturb.",
      "At the start I asked what the machines make. The animal, me, or some relation neither of us asked for. Here is the answer. They make a me, a satisfied and well lit visitor, and they make an animal, cute and cooperative and ready for the camera, and both come off the same press in a single motion. The apparatus was mine, the wanting was mine, the bright rectangle was mine, and all of it worked to hand the afternoon back to me as something warm. Werribee runs a bus that carries you past the animals along a fixed line, Chimelong in Guangzhou runs a small sightseeing train that does the same, and the sameness is the whole point, a human body moved past an animal body close enough to see and arranged to stay beyond its reach. The giraffe stood three metres off in the open, complete in itself, its attention somewhere else entirely. That indifference was the one genuinely other thing in the whole afternoon, and it was the one thing the screen let pass, the filter left plain, the can left on the shelf. The giraffe was there. I held a screen up to my face and watched it the whole way.",
    ],
  },
  {
    slug: "what-is-a-teachers-work-really",
    date: "04 Mar 2026",
    title: "What is a teacher's work, really?",
    excerpt: "A teacher teaches, but does not only teach.",
    image: asset("media/blog-teacher-work.png"),
    paragraphs: makeParagraphs(teacherWorkText),
  },
  {
    slug: "being-true-truth-telling-showing",
    date: "02 Mar 2026",
    title: "Being-true, truth-telling, and the showing that gets skipped",
    excerpt: "a note to myself",
    image: asset("media/blog-being-true.png"),
    variant: "truth-note",
    paragraphs: makeParagraphs(beingTrueText),
    references: truthReferenceEntries,
  },
];

const figurePanels = [
  { src: asset("media/figure-summer-05.png") },
  { src: asset("media/portrait-02.png") },
  { src: asset("media/portrait-03.png") },
  { src: asset("media/portrait-04.png") },
];

function ShinyText({ text, className = "" }) {
  return <span className={`shiny-text ${className}`}>{text}</span>;
}

function DecryptedText({
  text,
  tag: Tag = "span",
  className = "",
  speed = 48,
  maxIterations = 16,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?*",
}) {
  const ref = useRef(null);
  const startedRef = useRef(false);
  const [displayText, setDisplayText] = useState(text);
  const [encrypted, setEncrypted] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayText(text);
      setEncrypted(false);
      return undefined;
    }

    let intervalId;
    const runAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      let iteration = 0;

      intervalId = window.setInterval(() => {
        iteration += 1;
        const revealedCount = Math.ceil((iteration / maxIterations) * text.length);
        const nextText = text
          .split("")
          .map((character, index) => {
            if (character === " " || character === "," || character === "." || character === "&") {
              return character;
            }
            if (index < revealedCount) return character;
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("");

        setDisplayText(nextText);

        if (iteration >= maxIterations) {
          window.clearInterval(intervalId);
          setDisplayText(text);
          setEncrypted(false);
        }
      }, speed);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [characters, maxIterations, speed, text]);

  return (
    <Tag
      ref={ref}
      className={`decrypted-text ${encrypted ? "is-encrypted" : "is-revealed"} ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true">{displayText}</span>
    </Tag>
  );
}

function ButterflyBurst() {
  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    let cleanupTimer;

    const releaseButterflies = (event) => {
      const burstId = `${Date.now()}-${Math.random()}`;
      const nextButterflies = Array.from({ length: 6 }, (_, index) => {
        const angle = -150 + index * 58 + Math.random() * 24;
        const distance = 54 + Math.random() * 78;
        const radians = (angle * Math.PI) / 180;
        return {
          id: `${burstId}-${index}`,
          x: event.clientX,
          y: event.clientY,
          dx: Math.cos(radians) * distance,
          dy: Math.sin(radians) * distance - 48 - Math.random() * 42,
          delay: index * 22,
          scale: 0.72 + Math.random() * 0.58,
          rotate: -28 + Math.random() * 56,
        };
      });

      setButterflies((current) => [...current, ...nextButterflies].slice(-36));
      cleanupTimer = window.setTimeout(() => {
        setButterflies((current) => current.filter((butterfly) => !butterfly.id.startsWith(burstId)));
      }, 1280);
    };

    window.addEventListener("pointerdown", releaseButterflies);
    return () => {
      window.removeEventListener("pointerdown", releaseButterflies);
      if (cleanupTimer) window.clearTimeout(cleanupTimer);
    };
  }, []);

  return (
    <div className="butterfly-burst-layer" aria-hidden="true">
      {butterflies.map((butterfly) => (
        <span
          className="cursor-butterfly"
          key={butterfly.id}
          style={{
            left: `${butterfly.x}px`,
            top: `${butterfly.y}px`,
            "--dx": `${butterfly.dx}px`,
            "--dy": `${butterfly.dy}px`,
            "--delay": `${butterfly.delay}ms`,
            "--scale": butterfly.scale,
            "--rotate": `${butterfly.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
}

function Nav({ compact = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((isOpen) => !isOpen);
  const handleMenuKeyDown = (event) => {
    const isTrigger = event.target.classList.contains("nav-dropdown-trigger");
    if (isTrigger && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      toggleMenu();
    }
    if (event.key === "Escape") {
      closeMenu();
    }
  };

  return (
    <header className={`site-nav ${compact ? "site-nav--solid" : ""}`}>
      <a className="brand" href={page()}>
        <span className="brand-mark">SC</span>
        <span>Let's find the treasure</span>
      </a>
      <nav aria-label="Primary navigation">
        <div
          className={`nav-dropdown ${menuOpen ? "is-open" : ""}`}
          onMouseEnter={() => setMenuOpen(true)}
          onMouseLeave={closeMenu}
          onKeyDown={handleMenuKeyDown}
        >
          <button
            type="button"
            className="nav-dropdown-trigger"
            aria-haspopup="true"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            What I do
          </button>
          <div className="nav-dropdown-menu" role="menu" aria-label="What I do">
            {whatIDoMenu.map(([label, href]) => (
              <a href={href} role="menuitem" onClick={closeMenu} key={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <a href={sectionLink("#publications")}>Publications</a>
        <a href={page("blog")}>Blog</a>
        <a href={sectionLink("#contact")}>Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  const revealRef = useRef(null);

  const moveReveal = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (revealRef.current) {
      revealRef.current.style.setProperty("--mx", `${x}px`);
      revealRef.current.style.setProperty("--my", `${y}px`);
    }
  };

  const hideReveal = () => {
    if (revealRef.current) {
      revealRef.current.style.setProperty("--mx", "-9999px");
      revealRef.current.style.setProperty("--my", "-9999px");
    }
  };

  return (
    <section className="hero" id="top" onPointerMove={moveReveal} onPointerLeave={hideReveal}>
      <div className="hero-video" aria-hidden="true">
        <img src={asset("media/hero-01.png")} alt="" />
        <img src={asset("media/hero-02.png")} alt="" />
        <img src={asset("media/hero-03.png")} alt="" />
      </div>
      <div className="hero-reveal" ref={revealRef} aria-hidden="true">
        <img src={asset("media/hero-01.png")} alt="" />
        <img src={asset("media/hero-02.png")} alt="" />
        <img src={asset("media/hero-03.png")} alt="" />
      </div>
      <div className="hero-tint" />
      <Nav />
      <div className="hero-inner">
        <p className="eyebrow">Philosophy of education x digital life</p>
        <TextType
          tag="h1"
          text={["Summer's Space"]}
          typingSpeed={95}
          showCursor
          cursorCharacter="_"
          cursorBlinkDuration={0.5}
        />
        <TextType
          tag="p"
          className="hero-copy"
          text={["You've found my secret base!"]}
          typingSpeed={48}
          showCursor
          cursorCharacter="_"
          cursorBlinkDuration={0.5}
          startDelay={1550}
        />
        <div className="hero-actions">
          <a className="glass-button" href={sectionLink("#publications")}>
            <BookOpenText size={18} />
            Publications
          </a>
          <a className="text-button" href={page("blog")}>
            Read the blog
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="character-nav" aria-label="Featured site navigation">
        {navCards.map((card) => (
          <a className={`character-card character-card--${card.tone}`} href={card.href} key={card.title}>
            <img src={card.image} alt="" />
            <span>{card.title}</span>
            <small>{card.subtitle}</small>
          </a>
        ))}
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <section className="section intro" id="what-i-do">
      <WhatIDoContent />
      <div className="figure-ribbon" aria-label="Summer research figures">
        {figurePanels.map((panel, index) => (
          <figure className={`figure-panel figure-panel--${index + 1}`} key={panel.src}>
            <img src={panel.src} alt="" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function WhatIDoContent() {
  return (
    <>
      <div className="section-kicker">
        <Sparkles size={18} />
        Summer Cui
      </div>
      <div className="intro-grid">
        <div>
          <h2>
            <ShinyText text="Researching the being of education in technological life." />
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            Summer's work sits at the intersection of philosophy of education, digital culture,
            and social theory. She is interested in how education, technology, work, and public
            life shape human lives and self-understanding, with particular interests in generative
            AI in education, postdigital education, international student experience, educational
            professionalism, work and occupation, and questions of death and finitude.
          </p>
          <div className="direction-card glass">
            <span>Research directions</span>
            <div>
              {researchDirections.map((direction) => (
                <strong key={direction}>{direction}</strong>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function WaterHeaderImage({ src, alt }) {
  return (
    <figure className="water-header">
      <svg className="water-filter" aria-hidden="true" focusable="false">
        <filter id="water-ripple-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.034" numOctaves="2" seed="7">
            <animate attributeName="baseFrequency" dur="18s" values="0.012 0.034;0.018 0.028;0.012 0.034" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="9" />
        </filter>
      </svg>
      <img src={src} alt={alt} />
    </figure>
  );
}

function GlowCard({ children, className = "" }) {
  const [clicked, setClicked] = useState(false);

  const moveGlow = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const pulseGlow = () => {
    setClicked(true);
    window.setTimeout(() => setClicked(false), 520);
  };

  return (
    <article className={`magic-card glass ${clicked ? "is-clicked" : ""} ${className}`} onPointerMove={moveGlow} onPointerDown={pulseGlow}>
      <span className="magic-stars" aria-hidden="true" />
      {children}
    </article>
  );
}

function SparkleImageHeader({ src, children, className = "" }) {
  const [sparked, setSparked] = useState(false);

  const moveSpark = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  const clickSpark = () => {
    setSparked(true);
    window.setTimeout(() => setSparked(false), 560);
  };

  return (
    <section className={`page-visual-header project-visual-header ${className} ${sparked ? "is-sparked" : ""}`} onPointerMove={moveSpark} onPointerDown={clickSpark}>
      <img src={src} alt="" />
      <span className="project-sparkle" aria-hidden="true" />
      {children}
    </section>
  );
}

function ResearchInterestsPage() {
  return (
    <>
      <Nav compact />
      <main className="subpage research-page">
        <WaterHeaderImage src={asset("media/research-interests-header.jpeg")} alt="Water and sky reflected in a quiet research landscape" />
        <section className="section research-copy">
          <span className="butterfly butterfly--one" aria-hidden="true" />
          <span className="butterfly butterfly--two" aria-hidden="true" />
          <span className="butterfly butterfly--three" aria-hidden="true" />
          <span className="butterfly butterfly--four butterfly--soft" aria-hidden="true" />
          <span className="butterfly butterfly--five butterfly--soft" aria-hidden="true" />
          <span className="butterfly butterfly--six butterfly--soft" aria-hidden="true" />
          <article className="essay-panel">
            {researchEssay.map((paragraph, index) => (
              <p className={index === 0 ? "dropcap" : ""} key={paragraph}>
                {paragraph}
              </p>
            ))}
            <figure className="essay-illustration">
              <img src={asset("media/about-childhood-photo.png")} alt="Illustration based on Summer's childhood photo" />
              <figcaption>(drawn by Nicole, based on Summer's childhood photo)</figcaption>
            </figure>
          </article>
        </section>
        <section className="section intro research-about" aria-label="Research interests overview">
          <WhatIDoContent />
          <div className="figure-ribbon" aria-label="Summer research figures">
            {figurePanels.map((panel, index) => (
              <figure className={`figure-panel figure-panel--${index + 1}`} key={panel.src}>
                <img src={panel.src} alt="" />
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <Nav compact />
      <main className="subpage projects-page">
        <SparkleImageHeader src={asset("media/projects-header.png")}>
          <div>
            <TextType
              tag="p"
              className="eyebrow project-kicker"
              text={["Projects"]}
              typingSpeed={90}
              showCursor
              cursorCharacter="_"
              cursorBlinkDuration={0.55}
            />
          </div>
        </SparkleImageHeader>
        <section className="section project-section">
          <div className="project-feature-layout">
            <GlowCard className="project-feature">
              <span>PhD project</span>
              <h2>The generative AI dilemma as an ontological issue</h2>
              <p>
                Investigating ways of being-doing-knowing of Chinese international students in
                Australian higher education.
              </p>
              <p className="project-supervisors">
                Supervised by Professor John Quay, Dr Maurizio Toscano, and Dr Ben Williams.
              </p>
            </GlowCard>
            <figure className="project-supervisor-portrait">
              <img src={asset("media/project-supervisors.png")} alt="Summer with her PhD supervisors as clay figures" />
              <figcaption>Summer with her supervision team</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}

function TeachingServicePage() {
  const teaching = [
    ["Faculty of Education, University of Melbourne", "Education policy in context; Environmental education; Digital transformations in education"],
    ["Monash College", "English language teacher"],
    ["Swinburne College", "English language teacher"],
  ];
  const service = [
    ["Faculty of Education, University of Melbourne", "Diversity & Inclusion Committee representative, Graduate Researcher Committee"],
    ["Philosophy of Education Society of Australasia", "Committee member"],
  ];

  return (
    <>
      <Nav compact />
      <main className="subpage teaching-page">
        <section className="section teaching-hero">
          <div>
            <p className="eyebrow">Teaching & Service</p>
            <DecryptedText
              tag="h1"
              text="Teaching, language, and scholarly community."
              speed={46}
              maxIterations={18}
            />
          </div>
          <figure>
            <img src={asset("media/teaching-service-header.png")} alt="" />
          </figure>
        </section>
        <section className="section service-grid">
          <div>
            <p className="eyebrow">Teaching</p>
            <div className="timeline-list">
              {teaching.map(([placeName, role]) => (
                <GlowCard className="timeline-item" key={placeName}>
                  <span>{placeName}</span>
                  <p>{role}</p>
                </GlowCard>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Service</p>
            <div className="timeline-list">
              {service.map(([placeName, role]) => (
                <GlowCard className="timeline-item" key={placeName}>
                  <span>{placeName}</span>
                  <p>{role}</p>
                </GlowCard>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Publications() {
  return (
    <section className="section publications" id="publications" style={{ "--publications-image": `url(${asset("media/publications-bg.png")})` }}>
      <div className="publications-bg" aria-hidden="true" />
      <div className="lightfall" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="split-heading">
        <p className="eyebrow">Summer's publications</p>
      </div>
      <div className="publication-list">
        {publications.map((publication) => (
          <article className="publication" key={publication.doi}>
            <p>
              {publication.text}{" "}
              <a href={publication.doi} target="_blank" rel="noreferrer">
                {publication.doi}
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function BlogPreview() {
  const revealRef = useRef(null);

  const moveReveal = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (revealRef.current) {
      revealRef.current.style.setProperty("--mx", `${x}px`);
      revealRef.current.style.setProperty("--my", `${y}px`);
    }
  };

  const hideReveal = () => {
    if (revealRef.current) {
      revealRef.current.style.setProperty("--mx", "-9999px");
      revealRef.current.style.setProperty("--my", "-9999px");
    }
  };

  return (
    <section className="section blog-preview" onPointerMove={moveReveal} onPointerLeave={hideReveal}>
      <div className="blog-preview-media" aria-hidden="true">
        <img src={asset("media/blog-cycle-01.png")} alt="" />
        <img src={asset("media/blog-cycle-02.png")} alt="" />
      </div>
      <div className="blog-preview-reveal" ref={revealRef} aria-hidden="true">
        <img src={asset("media/blog-cycle-01.png")} alt="" />
        <img src={asset("media/blog-cycle-02.png")} alt="" />
      </div>
      <div>
        <p className="eyebrow">Blog</p>
        <h2>Essays, field notes, and fragments for slower thinking.</h2>
      </div>
      <a className="glass-button dark" href={page("blog")}>
        Open Blog
        <ArrowUpRight size={18} />
      </a>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Always glad to talk research, collaborations, or possible talks.</h2>
      </div>
      <div className="contact-card glass">
        <a href="mailto:summer.cui@unimelb.edu.au">
          <Mail size={19} />
          summer.cui@unimelb.edu.au
        </a>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <WhatIDo />
        <Publications />
        <BlogPreview />
        <Contact />
      </main>
    </>
  );
}

function BlogPage() {
  return (
    <>
      <Nav compact />
      <main className="blog-page">
        <div className="blog-motion" aria-hidden="true">
          <img src={asset("media/hero-01.png")} alt="" />
          <img src={asset("media/hero-02.png")} alt="" />
          <img src={asset("media/hero-03.png")} alt="" />
        </div>
        <section className="blog-hero">
          <p className="eyebrow">Summer's Blog</p>
          <h1>A place to write things that aren't papers.</h1>
          <p>
            A writing room for essays, notes, and daydreaming on the page.
          </p>
        </section>
        <section className="blog-grid">
          {blogPosts.map((post) => {
            const cardStyle = post.image ? { "--blog-card-image": `url(${post.image})` } : undefined;
            const cardClass = `blog-card glass ${post.image ? "blog-card--image" : ""}`;

            if (post.slug) {
              return (
                <a className={cardClass} href={page(`blog/${post.slug}`)} key={post.title} style={cardStyle}>
                  <span>{post.date}</span>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <small>
                    Read essay
                    <ArrowUpRight size={15} />
                  </small>
                </a>
              );
            }

            return (
              <article className={cardClass} key={post.title} style={cardStyle}>
                <span>{post.date}</span>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}

function renderInlineText(text) {
  const emphasisPattern = /(truth of what-is-true|truth-telling|Logos|phenomenological writing|performs)/g;
  const emphasisTerms = new Set(["truth of what-is-true", "truth-telling", "Logos", "phenomenological writing", "performs"]);
  return text.split(emphasisPattern).map((part, index) => (
    emphasisTerms.has(part) ? <em key={`${part}-${index}`}>{part}</em> : part
  ));
}

function renderReferenceEntry(entry, index) {
  return (
    <p className="apa-reference" key={`reference-${index}`}>
      {entry.map((part, partIndex) => (
        typeof part === "string"
          ? part
          : <em key={`reference-${index}-${partIndex}`}>{part.em}</em>
      ))}
    </p>
  );
}

function renderTruthListItem(item) {
  const [term, detail] = item.split(" — ");

  if (!detail) return renderInlineText(item);

  return (
    <>
      <strong>{term}</strong>
      {" — "}
      {renderInlineText(detail)}
    </>
  );
}

function renderTruthArticle(post) {
  const paragraphs = post.paragraphs;
  const elements = [];

  for (let index = 0; index < paragraphs.length; index += 1) {
    const paragraph = paragraphs[index];

    if (paragraph === "References") break;

    if (truthArticleHeadings.has(paragraph)) {
      elements.push(<h2 className="article-section-heading" key={paragraph}>{paragraph}</h2>);
      continue;
    }

    if (paragraph === "Three words to keep apart the whole way through:") {
      const items = paragraphs.slice(index + 1, index + 4);
      elements.push(<p key={paragraph}>{paragraph}</p>);
      elements.push(
        <ul className="truth-article-list" key="truth-opening-list">
          {items.map((item) => <li key={item}>{renderTruthListItem(item)}</li>)}
        </ul>
      );
      index += 3;
      continue;
    }

    if (paragraph === "Heidegger (2010) lists several everyday senses of the word truth. Paraphrasing his list so I remember it:") {
      const items = paragraphs.slice(index + 1, index + 6);
      elements.push(<p key={paragraph}>{renderInlineText(paragraph)}</p>);
      elements.push(
        <ol className="truth-article-list truth-article-list--ordered" key="truth-five-senses">
          {items.map((item) => <li key={item}>{renderInlineText(item)}</li>)}
        </ol>
      );
      index += 5;
      continue;
    }

    if (paragraph === "Heidegger (2010) lets the old equations stand in their hardest form so he can show their limit:") {
      const items = paragraphs.slice(index + 1, index + 4);
      elements.push(<p key={paragraph}>{renderInlineText(paragraph)}</p>);
      elements.push(
        <ul className="truth-article-list truth-equation-list" key="truth-equations">
          {items.map((item) => <li key={item}>{renderInlineText(item)}</li>)}
        </ul>
      );
      index += 3;
      continue;
    }

    if (paragraph === "The shape I keep landing on, in plain order:") {
      const items = paragraphs.slice(index + 1, index + 4);
      elements.push(<p key={paragraph}>{paragraph}</p>);
      elements.push(
        <ol className="truth-article-list truth-article-list--ordered" key="truth-final-order">
          {items.map((item) => <li key={item}>{renderTruthListItem(item)}</li>)}
        </ol>
      );
      index += 3;
      continue;
    }

    elements.push(
      <p className={paragraph.startsWith("(Note to self:") ? "truth-note-aside" : ""} key={`${post.slug}-${index}`}>
        {renderInlineText(paragraph)}
      </p>
    );
  }

  elements.push(
    <section className="apa-references" key="truth-references">
      <h2 className="article-section-heading references-heading">References</h2>
      {post.references.map(renderReferenceEntry)}
    </section>
  );

  return elements;
}

function BlogArticlePage({ post }) {
  const renderFigure = (figure, className = "") => (
    <figure className={`article-figure ${className}`} key={figure.label}>
      <img src={figure.src} alt={figure.caption} />
      <figcaption>
        <span>{figure.label}</span>
        {figure.caption}
      </figcaption>
    </figure>
  );

  return (
    <>
      <Nav compact />
      <main className="blog-article-page">
        <SparkleImageHeader src={post.image} className="blog-article-visual">
          <div>
            <p className="eyebrow">{post.date}</p>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
        </SparkleImageHeader>
        <article className={`blog-article-body ${post.variant === "truth-note" ? "truth-article" : ""}`}>
          {post.figures?.length ? (
            <>
              <p className="dropcap">{post.paragraphs[0]}</p>
              {renderFigure(post.figures[0], "article-figure--float")}
              <p>{post.paragraphs[1]}</p>
              <p>{post.paragraphs[2]}</p>
              <div className="article-clear" aria-hidden="true" />
              <p>{post.paragraphs[3]}</p>
              <div className="article-figure-grid article-figure-grid--two">
                {renderFigure(post.figures[1])}
                {renderFigure(post.figures[2])}
              </div>
              <p>{post.paragraphs[4]}</p>
              <div className="article-figure-grid article-figure-grid--two">
                {renderFigure(post.figures[3])}
                {renderFigure(post.figures[4])}
              </div>
              {post.paragraphs.slice(5).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </>
          ) : post.variant === "truth-note" ? (
            renderTruthArticle(post)
          ) : (
            post.paragraphs.map((paragraph, index) => (
              <p className={index === 0 ? "dropcap" : ""} key={`${post.slug}-${index}`}>
                {paragraph}
              </p>
            ))
          )}
          <footer className="article-footer">
            <a className="glass-button" href={page("blog")}>
              Back to Blog
              <ArrowUpRight size={17} />
            </a>
          </footer>
        </article>
      </main>
    </>
  );
}

function App() {
  let pageContent = <HomePage />;
  const activeBlogPost = blogPosts.find((post) => currentPath === `/blog/${post.slug}`);
  if (currentPath === "/blog") pageContent = <BlogPage />;
  if (activeBlogPost) pageContent = <BlogArticlePage post={activeBlogPost} />;
  if (currentPath === "/research-interests") pageContent = <ResearchInterestsPage />;
  if (currentPath === "/projects") pageContent = <ProjectsPage />;
  if (currentPath === "/teaching-service") pageContent = <TeachingServicePage />;

  return (
    <>
      <ButterflyBurst />
      {pageContent}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
