/**
 * @typedef {Object} Author
 * @property {string} name
 * @property {string} role
 */

/**
 * @typedef {Object} ArticleSection
 * @property {'p' | 'h2' | 'quote' | 'list' | 'image' | 'product'} type
 * @property {string} [text]
 * @property {string} [cite]
 * @property {string[]} [items]
 * @property {string} [src]
 * @property {string} [alt]
 * @property {string} [caption]
 * @property {string} [id]
 */

/**
 * @typedef {Object} Article
 * @property {string} slug
 * @property {string} title
 * @property {string} excerpt
 * @property {string} category
 * @property {string[]} tags
 * @property {string} date
 * @property {Author} author
 * @property {number} readMinutes
 * @property {string} image
 * @property {string} imageAlt
 * @property {ArticleSection[]} sections
 */

/** @type {Article[]} */
export const articles = [
  {
    slug: 'the-desk-that-got-out-of-the-way',
    title: 'The Desk That Finally Got Out of the Way',
    excerpt: 'We cleared the studio desk down to a wood top, one display, a lamp, and the camera that refused to live in a bag.',
    category: 'Product Reviews',
    tags: ['Workspace', 'Desk', 'Lighting', 'Product recommendation'],
    date: '2026-02-12',
    author: { name: 'Mara Ellison', role: 'Editor' },
    readMinutes: 8,
    image: '/images/workspace-detail.jpg',
    imageAlt: 'A wood desk by a bright window with a laptop, an upright monitor, a camera, and a plant.',
    sections: [
      {
        type: 'p',
        text: 'For a year the studio desk was a storage shelf that happened to have a laptop on it. A monitor arm we never finished installing, a second notebook, a lamp aimed at the wall, and a camera bag that had not been unzipped since November. In January we gave the surface a rule: if an object did not earn its place in a normal Tuesday, it left.',
      },
      {
        type: 'p',
        text: 'What remained is the desk in the window. Solid oak, a laptop to the left, an upright display on a low stand, a plant that survives neglect, and a camera body sitting out where it can be picked up. The mug moves. Everything else has an address.',
      },
      {
        type: 'h2',
        text: 'The top did more than the accessories',
      },
      {
        type: 'p',
        text: 'We had assumed the next improvement would be a tray, a mat, or a cable canal. It was the top itself. A heavy wood surface does not drum when you type, and it does not look unfinished when the only things on it are work. The window does the morning lighting. By three o’clock we switch on a task lamp and keep going.',
      },
      {
        type: 'image',
        src: '/images/article-desk.jpg',
        alt: 'A laptop with code on screen, an external monitor, headphones, and a white lamp on a bright desk.',
        caption: 'The afternoon setup: one external display, headphones within reach, and a lamp for when the window drops off.',
      },
      {
        type: 'quote',
        text: 'A desk is finished when you stop shopping for it during the workday.',
        cite: 'Bench note, February 2026',
      },
      {
        type: 'h2',
        text: 'What we actually removed',
      },
      {
        type: 'list',
        items: [
          'A second notebook that duplicated the one app we already open.',
          'A monitor arm still in the box. The low stand was enough.',
          'A desk mat that made the wood look like a product photo.',
          'The camera bag. The body stays on the desktop or it does not get used.',
          'Any cable we could not trace in ten seconds.',
        ],
      },
      {
        type: 'p',
        text: 'The lamp was the one new object. Not a bright overhead, and not a bulb that glares into the monitor. A matte steel shade that falls on the keyboard and leaves the room dim. It is the difference between working at five and deciding the day is over because the window is.',
      },
      {
        type: 'product',
        id: 'studio-oak-desk',
      },
      {
        type: 'product',
        id: 'matte-task-lamp',
      },
      {
        type: 'h2',
        text: 'Who should skip this',
      },
      {
        type: 'p',
        text: 'If you move every year, do not buy a top this heavy. If your work is spreadsheets on two huge displays, a deeper table and a real arm still make sense. Our recommendation is narrower: a settled room, one screen, and a surface you are willing to see. That desk got out of the way. We noticed the work again.',
      },
    ],
  },
  {
    slug: 'note-apps-we-opened-in-2026',
    title: 'The Note Apps We Actually Opened in 2026',
    excerpt: 'Notion, Craft, and Obsidian all survived a month of real notes. Only two of them were open on a Tuesday.',
    category: 'Platform Picks',
    tags: ['Notion', 'Obsidian', 'Craft', 'Platform recommendation', 'Notes'],
    date: '2026-01-18',
    author: { name: 'Adele Okonkwo', role: 'Platforms Editor' },
    readMinutes: 9,
    image: '/images/article-notes.jpg',
    imageAlt: 'A hand writing a checklist in an open grid notebook.',
    sections: [
      {
        type: 'p',
        text: 'We kept a paper checklist on the bench the whole month, partly out of superstition and partly because paper shows which tasks the apps were failing to hold. Every capture had to land somewhere digital before the end of the day. Then we looked at what we opened without being asked.',
      },
      {
        type: 'p',
        text: 'Three platforms entered the test. Notion, because the team already shared a homepage. Craft, because the documents are beautiful and the writing feels calm. Obsidian, because the files live on the machine and the graph is not the point — the point is that a note from 2024 is still a file.',
      },
      {
        type: 'h2',
        text: 'Notion is the shared room',
      },
      {
        type: 'p',
        text: 'If two or more people need the same page, Notion still wins. Meeting notes, a light database of products on the bench, and a homepage with three links beat a folder of perfect documents nobody else can find. The cost is real: pages accumulate, and a database becomes a hobby. We deleted more than we added, and the workspace got better.',
      },
      {
        type: 'h2',
        text: 'Obsidian is the private library',
      },
      {
        type: 'p',
        text: 'Personal research moved to Obsidian and stayed there. Interviews, half sentences, links we will not explain to a teammate — these do not belong in a shared wiki. Local files mean we can leave the app for a year and still have the work. Craft wrote the prettiest single document. We did not return to it when we were in a hurry.',
      },
      {
        type: 'quote',
        text: 'The best note app is the one open beside the paper list, not the one with the best tour.',
        cite: 'From the January desk',
      },
      {
        type: 'list',
        items: [
          'Choose Notion when the note is for the team.',
          'Choose Obsidian when the note is for your future self.',
          'Choose Craft when the document is the deliverable and almost no one else will edit it.',
          'Keep one paper list. It exposes what the apps are avoiding.',
        ],
      },
      {
        type: 'p',
        text: 'We did not crown a single winner. UncoverLab’s shared bench lives in Notion. The reporting underneath it lives in Obsidian. Everything else was a demo we liked and then forgot to open.',
      },
    ],
  },
  {
    slug: 'five-headphones-one-quiet-afternoon',
    title: 'Five Headphones, One Quiet Afternoon',
    excerpt: 'A week of listening in the studio and on the street. One black over-ear pair stayed. The rest went back in their cases.',
    category: 'Product Reviews',
    tags: ['Headphones', 'Audio', 'Product recommendation', 'Focus'],
    date: '2025-12-09',
    author: { name: 'Jonah Park', role: 'Product Editor' },
    readMinutes: 8,
    image: '/images/article-headphones.jpg',
    imageAlt: 'Black over-ear headphones on a yellow background.',
    sections: [
      {
        type: 'p',
        text: 'The test was deliberately ordinary. A Tuesday edit, a call with a supplier, a walk to the coffee bar with the street still wet, and a record we already know well enough to hear what a headphone adds. Five pairs. We scored comfort at hour two, not minute ten.',
      },
      {
        type: 'p',
        text: 'Four of them did one thing well. A bright pair made vocals exciting and tiring. A tiny pair disappeared in a pocket and disappeared in the mix. A heavy pair isolated the room so completely that someone had to tap the desk. A wired on-ear was lovely for voice notes and hopeless on the bus.',
      },
      {
        type: 'image',
        src: '/images/product-headphones.jpg',
        alt: 'Wired on-ear headphones with a brown leather band and silver ear cups.',
        caption: 'The wired on-ear pair we kept for short voice notes. It lost the week, and it still has a job.',
      },
      {
        type: 'h2',
        text: 'The pair that stayed',
      },
      {
        type: 'p',
        text: 'The black over-ears won by being unremarkable in the ways that matter. The seal takes the edge off HVAC and traffic. Voices in the room remain faintly there, which is a feature if you work with other people. The buttons are physical. We never hunted for a tap gesture with cold hands.',
      },
      {
        type: 'quote',
        text: 'Isolation is a tool. Total silence is a different product, and we did not want it.',
        cite: 'Listening notes, December 2025',
      },
      {
        type: 'list',
        items: [
          'Comfort past three hours beat any frequency chart we could draw.',
          'Low rumble cancelling mattered more than cancelling speech.',
          'A warm tuning hid bad recordings less than a scooped one, which we preferred.',
          'Cases that do not fit a backpack are a daily tax.',
        ],
      },
      {
        type: 'product',
        id: 'studio-over-ears',
      },
      {
        type: 'p',
        text: 'If you want a headphone that vanishes in public and sounds thrilling for twenty minutes, this is the wrong pick. If you want the pair you forget to take off while the piece gets finished, start here.',
      },
    ],
  },
  {
    slug: 'where-small-teams-track-work',
    title: 'Where Small Teams Track Work Now',
    excerpt: 'Linear, Height, and Jira on a five-person bench. The winner was the tool people updated without a meeting about the tool.',
    category: 'Platform Picks',
    tags: ['Linear', 'Jira', 'Height', 'Platform recommendation', 'Teams'],
    date: '2025-11-03',
    author: { name: 'Adele Okonkwo', role: 'Platforms Editor' },
    readMinutes: 8,
    image: '/images/article-team.jpg',
    imageAlt: 'Five people working on laptops around a shared wooden table.',
    sections: [
      {
        type: 'p',
        text: 'The team in the photo is the size we tested for: a handful of people, more than one laptop, no project-management department. We ran the same week of work in three trackers and asked a rude question at the end. Which board matched what had actually shipped?',
      },
      {
        type: 'h2',
        text: 'Jira can hold a company. It can also hide a week.',
      },
      {
        type: 'p',
        text: 'Jira was the most capable and the least honest at our scale. Fields exist for every future process. We filled them because the screen asked, then stopped trusting the board. If you already have a program office, stay. If you are five people at a wooden table, the software is larger than the work.',
      },
      {
        type: 'h2',
        text: 'Linear matched the table',
      },
      {
        type: 'p',
        text: 'Linear was the tracker people updated between sentences. Issues are fast to file, cycles are visible, and the keyboard is part of the product rather than an afterthought. Height was a close second — calm, quick, and pleasant — and we would not talk anyone out of it. We returned to Linear because status was obvious from across the room, on a shared screen, without a tutorial.',
      },
      {
        type: 'quote',
        text: 'A tracker is working when the board and the table tell the same story.',
        cite: 'Studio retro, November 2025',
      },
      {
        type: 'list',
        items: [
          'Pick Linear for a small product team that ships every week.',
          'Pick Height if you want the same speed with a softer interface.',
          'Pick Jira when the organization is already larger than the project.',
          'Do not keep two trackers. The second one becomes fiction.',
        ],
      },
      {
        type: 'p',
        text: 'Our recommendation is not that Linear is the future of work. It is that, for a team this size, it was the only board we did not have to apologize for in the Friday read-through.',
      },
    ],
  },
  {
    slug: 'one-camera-for-the-whole-lab',
    title: 'One Camera for the Whole Lab',
    excerpt: 'A Sony body and three compact primes replaced the second camera we were carrying out of guilt.',
    category: 'Product Reviews',
    tags: ['Camera', 'Sony', 'Product recommendation', 'Photography'],
    date: '2025-09-21',
    author: { name: 'Jonah Park', role: 'Product Editor' },
    readMinutes: 7,
    image: '/images/article-camera.jpg',
    imageAlt: 'A Sony mirrorless camera on a dark wooden table, surrounded by compact prime lenses.',
    sections: [
      {
        type: 'p',
        text: 'The camera on the bench is a Sony mirrorless body with a short list of primes around it. A normal lens, a wider one, a small tele. For two years we also owned a second body “for the days that matter.” The days that mattered were the days the second body stayed home and the first body was already on the desk.',
      },
      {
        type: 'p',
        text: 'So we stopped packing the backup. The test was three months of studio objects, window light, and the walk between Harbor Street and the coffee bar. If a photograph did not happen, we wrote down whether the missing lens was real or whether the camera had simply been in a bag.',
      },
      {
        type: 'h2',
        text: 'Primes made the edit shorter',
      },
      {
        type: 'p',
        text: 'A zoom would have been more convenient twice a week. It would also have added a pile of near-duplicate frames. The primes made us move our feet. Product photos got simpler: one distance, one background, less cropping later. The files from a single body also sort themselves. Two bodies had meant two clocks and a folder we dreaded.',
      },
      {
        type: 'quote',
        text: 'The best second camera was an empty space in the bag.',
        cite: 'Field note, September 2025',
      },
      {
        type: 'list',
        items: [
          'One body on the desk gets used. One body in a locker does not.',
          'Three primes covered the lab’s actual photographs.',
          'Mixed mounts on the table are a warning, not a collection. We kept only the glass this body can use without an essay.',
          'We still miss a zoom at events. We do not attend enough events to own one.',
        ],
      },
      {
        type: 'product',
        id: 'mirrorless-bench-kit',
      },
      {
        type: 'p',
        text: 'Buy the smaller kit if your photographs are rooms, objects, and notes. Keep the long zooms if your photographs are other people’s schedules. We make the first kind. One camera was the upgrade.',
      },
    ],
  },
  {
    slug: 'newsletters-without-the-noise',
    title: 'Newsletters Without the Noise',
    excerpt: 'Substack, Beehiiv, and Ghost, judged by the reading experience — not the growth dashboard.',
    category: 'Platform Picks',
    tags: ['Ghost', 'Substack', 'Beehiiv', 'Platform recommendation', 'Writing'],
    date: '2025-08-14',
    author: { name: 'Adele Okonkwo', role: 'Platforms Editor' },
    readMinutes: 8,
    image: '/images/article-writing.jpg',
    imageAlt: 'A fountain pen nib writing a line on cream paper.',
    sections: [
      {
        type: 'p',
        text: 'Before we compared platforms we wrote the piece on paper. A fountain pen is slow in a useful way: you find out whether the paragraph deserves a publish button. Then we moved the same essay through Substack, Beehiiv, and Ghost and read it the way a subscriber would, on a phone, on a Tuesday, with no interest in our analytics.',
      },
      {
        type: 'h2',
        text: 'Substack is a network. That is the product and the problem.',
      },
      {
        type: 'p',
        text: 'Substack remains the fastest way to find a first hundred readers. Recommendations work. The editor is enough. The cost sits around the essay: a feed, other people’s growth, a magazine that is also a directory. If the network is why you are there, stay. If you wanted a quiet letter, the chrome is louder than it used to be.',
      },
      {
        type: 'h2',
        text: 'Beehiiv is a sending machine',
      },
      {
        type: 'p',
        text: 'Beehiiv is excellent at the unglamorous middle: segments, tests, and a referral program that does not require a plugin archaeology project. We liked the tools and felt the page design pulling every letter toward the same template. Fine for a daily briefing. Slightly anonymous for a lab note.',
      },
      {
        type: 'h2',
        text: 'Ghost is where we would publish',
      },
      {
        type: 'p',
        text: 'Ghost gave us a site and a membership list without a recommendation feed competing with the piece. Themes take an afternoon of taste, not a growth hire. You own the relationship more directly, and you also own the maintenance. For UncoverLab that trade is correct. We are not trying to be discovered between two other newsletters. We are trying to be read.',
      },
      {
        type: 'quote',
        text: 'Choose the platform whose homepage still looks like the writing.',
        cite: 'Publishing test, August 2025',
      },
      {
        type: 'list',
        items: [
          'Substack if distribution is the unsolved problem.',
          'Beehiiv if the letter is operational and frequent.',
          'Ghost if the publication should feel like a place.',
        ],
      },
      {
        type: 'p',
        text: 'The pen stays on the desk either way. None of the three platforms improve a sentence. They only decide who stands next to it.',
      },
    ],
  },
  {
    slug: 'keyboards-after-ten-thousand-words',
    title: 'Keyboards After Ten Thousand Words',
    excerpt: 'A low-profile aluminum board looked cleaner. The compact mechanical keyboard is the one we kept typing on.',
    category: 'Product Reviews',
    tags: ['Keyboard', 'Mechanical', 'Product recommendation', 'Writing'],
    date: '2025-06-29',
    author: { name: 'Jonah Park', role: 'Product Editor' },
    readMinutes: 7,
    image: '/images/product-keyboard.jpg',
    imageAlt: 'Close view of a custom mechanical keyboard with colorful modifier keys and a loose switch.',
    sections: [
      {
        type: 'p',
        text: 'We counted words because preference lies in the first afternoon. Both boards felt exciting on Monday. By Thursday one of them was the board we sat down to without negotiating. Ten thousand words is not a laboratory. It is long enough to notice a wrist.',
      },
      {
        type: 'image',
        src: '/images/article-keyboard.jpg',
        alt: 'A slim silver keyboard on a pale yellow desk beside a notebook, a pen, and a white mouse.',
        caption: 'The low-profile board that started the test. Quiet, tidy, and easy to leave.',
      },
      {
        type: 'h2',
        text: 'Clean lost to comfortable',
      },
      {
        type: 'p',
        text: 'The silver low-profile keyboard wins the photograph. It sits on a yellow desk as if a stylist placed it, next to a notebook and a mouse, and it never picks a fight with a microphone. It also left our hands vaguely tired. The keys are even and a little anonymous. Fine for chat. Thin for an essay.',
      },
      {
        type: 'p',
        text: 'The compact mechanical board is louder and less polite. Arrows are real keys. Shift is a full key. The switches can come out — the loose one in the photo is not a styling prop, it is how we changed our minds about the feel without buying a second keyboard. The sound stays in the desk, not in the next room, which was the condition for keeping it in a shared studio.',
      },
      {
        type: 'quote',
        text: 'Buy the board you want under your hands at word four thousand, not word forty.',
        cite: 'Typing test, June 2025',
      },
      {
        type: 'product',
        id: 'compact-mechanical-keyboard',
      },
      {
        type: 'p',
        text: 'Keep a low-profile board if the desk is a video set or the room is thin-walled and unforgiving. Keep the mechanical one if the job is paragraphs. We write for a living. The custom board stayed.',
      },
    ],
  },
  {
    slug: 'design-stack-after-the-handoff',
    title: 'The Design Stack After the Handoff',
    excerpt: 'Figma, Penpot, and Framer, scored on the day the file has to become a page someone else can ship.',
    category: 'Platform Picks',
    tags: ['Figma', 'Penpot', 'Framer', 'Platform recommendation', 'Design'],
    date: '2025-05-10',
    author: { name: 'Adele Okonkwo', role: 'Platforms Editor' },
    readMinutes: 8,
    image: '/images/article-design.jpg',
    imageAlt: 'Printed color swatches, a palette book, and a tablet of interface sketches on a dark desk.',
    sections: [
      {
        type: 'p',
        text: 'The desk in the photograph is the unfashionable part of design: paper swatches, a tablet of rough component sketches, a pencil, names written next to colors so nobody has to remember which blue was approved. Software comes after that. We judged Figma, Penpot, and Framer on the handoff, not on the first artboard.',
      },
      {
        type: 'h2',
        text: 'Figma is still the room',
      },
      {
        type: 'p',
        text: 'Multiplayer editing is no longer a feature. It is the reason a file can be a meeting. Comments land on the object, developers inspect spacing without a PDF, and the team already knows the shortcuts. We resent the price and the occasional slow file. We still put the work there when more than one person must touch it before Friday.',
      },
      {
        type: 'h2',
        text: 'Penpot is the open alternative that finally feels usable',
      },
      {
        type: 'p',
        text: 'Penpot is the right recommendation when the file itself should not be trapped, or when a team wants an open tool and is willing to be early. Components, inspection, and the browser app are good enough for a real product. The ecosystem of plugins and the muscle memory of collaborators are not there yet. We would start a new internal system on Penpot. We would not migrate a mature library on a deadline.',
      },
      {
        type: 'h2',
        text: 'Framer is a different job',
      },
      {
        type: 'p',
        text: 'Framer shines when the design is the site. Marketing pages, campaigns, a lab homepage that should move. It is a weaker system of record for a product with many states. We used it to prototype the motion on a landing page and then stopped pretending it replaced the component file.',
      },
      {
        type: 'image',
        src: '/images/product-monitor.jpg',
        alt: 'A large all-in-one desktop display on a white desk.',
        caption: 'Critiques still happen on one large display. The tool matters less than whether everyone is looking at the same frame.',
      },
      {
        type: 'list',
        items: [
          'Figma for product design that several people will edit.',
          'Penpot when ownership and openness outrank the plugin directory.',
          'Framer when the deliverable is a published page.',
          'Keep the paper swatches. Screens lie about color until the print is in the room.',
        ],
      },
      {
        type: 'p',
        text: 'Our stack, said plainly: sketches and swatches on the table, the system in Figma, the occasional campaign in Framer, and Penpot on the list for the next project we are allowed to start clean.',
      },
    ],
  },
  {
    slug: 'ninety-days-on-the-espresso-bar',
    title: 'Ninety Days on the Espresso Bar',
    excerpt: 'We stopped upgrading the machine and started repeating one drink. The beans, the basket, and the Friday tasting did the work.',
    category: 'Product Reviews',
    tags: ['Espresso', 'Coffee', 'Product recommendation', 'Kitchen'],
    date: '2025-03-27',
    author: { name: 'Chris Lang', role: 'Studio Editor' },
    readMinutes: 7,
    image: '/images/product-espresso.jpg',
    imageAlt: 'Portafilters holding a milk drink, ground coffee, and roasted beans on a steel counter.',
    sections: [
      {
        type: 'p',
        text: 'The first month was shopping. A new basket, a different pitcher, a bag of beans chosen because the label looked serious. The drinks were interesting and inconsistent, which is a polite way to say we could not tell what had changed. In month two we froze the setup. Same basket. Beans dated on the bag. One milk drink, repeated until it was boring.',
      },
      {
        type: 'p',
        text: 'Boredom was the point. The portafilters on the steel counter became a checklist we could see: whole beans, grounds, finished cup. If the beans were tired, the cup could not argue its way out. If the grounds looked uneven, we fixed the distribution before we blamed the machine.',
      },
      {
        type: 'image',
        src: '/images/article-coffee.jpg',
        alt: 'Three hands toasting with coffee drinks, including two lattes and a dark espresso.',
        caption: 'Friday tasting. Same beans, three cups, no new gadgets allowed on the table.',
      },
      {
        type: 'h2',
        text: 'What actually improved the cup',
      },
      {
        type: 'list',
        items: [
          'Beans used inside two weeks, stored in the bag they arrived in.',
          'One basket we understand, not a drawer of experiments.',
          'A scale that stays on the bar. Guessing dose was the whole mystery.',
          'Milk poured the same way, rather than a new pattern every morning.',
        ],
      },
      {
        type: 'quote',
        text: 'A repeatable ordinary drink is worth more than an occasional miracle.',
        cite: 'Bar log, March 2025',
      },
      {
        type: 'product',
        id: 'espresso-bar-essentials',
      },
      {
        type: 'p',
        text: 'We are not anti-machine. A compact espresso machine that holds temperature will always beat a gadget with moods. We are anti-sequence: do not buy the next stainless object until the beans, the basket, and the dose are dull. Ninety days later, the Friday cups finally matched. That was the upgrade.',
      },
    ],
  },
  {
    slug: 'how-we-decide-what-to-test',
    title: 'How UncoverLab Decides What to Test',
    excerpt: 'A method note from the first month: fewer objects, longer stays, and a date on every conclusion.',
    category: 'Lab Notes',
    tags: ['Method', 'Editorial', 'Lab'],
    date: '2025-02-16',
    author: { name: 'Mara Ellison', role: 'Editor' },
    readMinutes: 6,
    image: '/images/article-method.jpg',
    imageAlt: 'Glass beakers and a pipette on a bright lab bench.',
    sections: [
      {
        type: 'p',
        text: 'UncoverLab opened in February 2025 with a rule that sounds severe and is mostly protective. We would rather publish ten pieces we can stand behind than a feed of first impressions. The glassware on the bench is a reminder, not a costume: keep the variables few enough that a result can be read.',
      },
      {
        type: 'h2',
        text: 'What gets a slot',
      },
      {
        type: 'p',
        text: 'A product or a platform earns a test when someone on the desk would actually live with it, and when we can say what it replaces. A keyboard replaces a keyboard. A tracker replaces a tracker. “Nice to look at” is not a hypothesis. We also leave room for one lab note a year that is only about the method, so the reviews do not pretend to be neutral by accident.',
      },
      {
        type: 'list',
        items: [
          'We keep the object or account in ordinary work, not a sponsored weekend.',
          'We name the tradeoff in the same piece as the praise.',
          'We date the conclusion. Later changes get a note, not a silent edit.',
          'We would rather recommend nothing than recommend a tie we do not believe.',
        ],
      },
      {
        type: 'h2',
        text: 'What we will not do',
      },
      {
        type: 'p',
        text: 'We do not rank twelve items we touched for an hour. We do not hide a referral behind a verdict. If a link ever pays for itself, it will say so in the sentence. The scores on the product pages are editorial — a summary of the piece — not a measurement pretending to be a laboratory instrument.',
      },
      {
        type: 'quote',
        text: 'Fewer tests. Longer stays. A date next to every opinion.',
        cite: 'Opening note, February 2025',
      },
      {
        type: 'p',
        text: 'If you want the short version of who we are, the about page has it. If you want the work, start with the newest piece on the bench and read backward. The order is the argument: what we believe now sits on top.',
      },
    ],
  },
];

/**
 * 按 slug 查找文章。
 * @param {string} slug
 * @returns {Article | undefined}
 */
export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

/**
 * 按日期从新到旧排序。
 * @param {Article[]} list
 * @param {'newest' | 'oldest'} [sort]
 * @returns {Article[]}
 */
export function sortArticles(list, sort = 'newest') {
  const sorted = [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
  return sort === 'oldest' ? sorted.reverse() : sorted;
}

/**
 * 按关键词、分类筛选，并按日期排序。
 * @param {{ query?: string, category?: string, sort?: 'newest' | 'oldest' }} options
 * @returns {Article[]}
 */
export function filterArticles({ query = '', category = 'All', sort = 'newest' } = {}) {
  const needle = query.trim().toLowerCase();
  const matched = articles.filter((article) => {
    const categoryOk = category === 'All' || article.category === category;
    if (!categoryOk) return false;
    if (!needle) return true;
    const haystack = [
      article.title,
      article.excerpt,
      article.category,
      article.author.name,
      ...article.tags,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(needle);
  });
  return sortArticles(matched, sort);
}

/**
 * 相关文章：优先同分类，不足时用其他最新文章补齐。
 * @param {string} slug
 * @param {number} [limit]
 * @returns {Article[]}
 */
export function getRelatedArticles(slug, limit = 3) {
  const current = getArticleBySlug(slug);
  if (!current) return sortArticles(articles).slice(0, limit);
  const sameCategory = sortArticles(
    articles.filter((article) => article.slug !== slug && article.category === current.category),
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const others = sortArticles(
    articles.filter((article) => article.slug !== slug && article.category !== current.category),
  );
  return [...sameCategory, ...others].slice(0, limit);
}
