/**
 * @typedef {Object} Product
 * @property {string} slug
 * @property {string} name
 * @property {string} category
 * @property {string} price
 * @property {number} score
 * @property {string} summary
 * @property {string} image
 * @property {string} imageAlt
 * @property {string[]} paragraphs
 * @property {{ label: string, value: string }[]} specs
 * @property {string[]} pros
 * @property {string[]} cons
 * @property {string} verdict
 * @property {string} articleSlug
 */

/** @type {Product[]} */
export const products = [
  {
    slug: 'studio-oak-desk',
    name: 'Window Oak Desk',
    category: 'Workspace',
    price: '$740–$980',
    score: 4.7,
    summary: 'A solid wood desk that holds a laptop, an upright display, and nothing else you have to apologize for.',
    image: '/images/workspace-detail.jpg',
    imageAlt: 'A solid wood desk by tall windows with a laptop, an upright monitor, a camera, and a plant.',
    paragraphs: [
      'The desk that stayed in the studio is not a standing-desk kit and not a cable-management project. It is a thick oak top in front of a window, deep enough for a laptop on the left and a monitor on a low arm in the center.',
      'We judged it the way we actually work: morning writing, afternoon calls, and a camera that lives on the desktop instead of in a bag. The top shrugs off a mug, a keyboard, and the occasional dropped lens cap. The grain is the finish. We stopped wanting a mat or a felt pad.',
      'What we would change is the depth of the commitment. A top this heavy is a decision about the room. If you move apartments twice a year, buy a lighter table. If the desk is allowed to stay put, this is the one we would buy again.',
    ],
    specs: [
      { label: 'Top', value: 'Solid oak, matte oil' },
      { label: 'Best with', value: 'Laptop plus one display' },
      { label: 'Lived with', value: 'Four months' },
      { label: 'Best for', value: 'A desk that does not need a redesign' },
    ],
    pros: [
      'Looks calm with real work on it',
      'Heavy enough that the monitor arm does not rock',
      'Window light does the job of a second lamp most mornings',
    ],
    cons: [
      'Too permanent for a temporary room',
      'No built-in cable tray — we hid a single power brick on the floor',
    ],
    verdict: 'Keep it if the room is settled. The desk disappeared into the work, which is the highest compliment we give furniture.',
    articleSlug: 'the-desk-that-got-out-of-the-way',
  },
  {
    slug: 'matte-task-lamp',
    name: 'Matte Task Lamp',
    category: 'Lighting',
    price: '$160–$210',
    score: 4.5,
    summary: 'A charcoal steel lamp with a deep shade. It lights the page and leaves the rest of the room alone.',
    image: '/images/product-lamp.jpg',
    imageAlt: 'A matte charcoal steel task lamp with a large adjustable shade against a white wall.',
    paragraphs: [
      'Overhead office light flattens a desk. This lamp does the opposite. The shade is deep, the head tilts on a simple knuckle, and the beam falls on paper or a keyboard without painting the wall behind the monitor.',
      'We used it beside the coding desk and over a notebook on late edit nights. The matte steel does not glare into a camera lens, which mattered more than we expected once we started photographing products on the same table.',
      'It is not a smart lamp. There is no app and no circadian schedule. A switch on the stem is the whole interface, and after a month we stopped wishing for anything else.',
    ],
    specs: [
      { label: 'Finish', value: 'Matte charcoal steel' },
      { label: 'Head', value: 'Deep shade, tilts and turns' },
      { label: 'Light', value: 'Warm LED, not a bare bulb' },
      { label: 'Best for', value: 'Reading, notes, and evening edits' },
    ],
    pros: [
      'Beam stays on the work',
      'Quiet finish in photographs',
      'One switch, no account',
    ],
    cons: [
      'The arm needs a bit of wall or floor behind the desk',
      'Too focused to light a whole room',
    ],
    verdict: 'The lamp we reach for when the window gives up. Buy it for the shade, not for features.',
    articleSlug: 'the-desk-that-got-out-of-the-way',
  },
  {
    slug: 'studio-over-ears',
    name: 'Black Over-ear Headphones',
    category: 'Audio',
    price: '$280–$349',
    score: 4.6,
    summary: 'The over-ear pair that won a week of listening tests: quiet enough for deep work, honest enough for music.',
    image: '/images/article-headphones.jpg',
    imageAlt: 'Black over-ear headphones with leather cushions resting on a yellow background.',
    paragraphs: [
      'We lined up five pairs and then stopped switching. These black over-ears were the ones still on the bench at the end of the week. The clamp is firm without a headache at hour three, and the cushions seal well enough that a café dishwasher fades into weather.',
      'Noise cancelling is strong on low rumble — trains, HVAC, the street below the studio — and less magical on voices. That is the right trade for work. Voices nearby stay faintly present, so a colleague does not have to wave.',
      'The tuning is slightly warm, never boomy. Piano and voice sound like they are in the room. We would not master a record on them. We would write, edit, and take a call without reaching for a second pair.',
    ],
    specs: [
      { label: 'Style', value: 'Closed over-ear' },
      { label: 'Best at', value: 'Rumble, focus, long sessions' },
      { label: 'Controls', value: 'Physical buttons on the cup' },
      { label: 'Lived with', value: 'Daily for three weeks' },
    ],
    pros: [
      'Comfortable past a full workday',
      'Cancelling helps without isolating you completely',
      'Does not shout or thin out vocals',
    ],
    cons: [
      'Bulkier than the on-ear pair we also tried',
      'Case takes a real corner of a backpack',
    ],
    verdict: 'Our listening pick for work that has to happen in imperfect rooms.',
    articleSlug: 'five-headphones-one-quiet-afternoon',
  },
  {
    slug: 'mirrorless-bench-kit',
    name: 'Sony Mirrorless Bench Kit',
    category: 'Imaging',
    price: '$1,150–$1,480',
    score: 4.4,
    summary: 'One Sony body and a short list of compact primes. The second camera left the bag.',
    image: '/images/article-camera.jpg',
    imageAlt: 'A black Sony mirrorless camera on a dark table, surrounded by compact prime lenses.',
    paragraphs: [
      'The kit on the bench is deliberately small: a Sony mirrorless body, a normal prime, a slightly wider prime, and a short tele that still fits in one hand. We stopped carrying a second body the week we admitted we never swapped it under pressure.',
      'What the small kit changed was not image quality. It was whether the camera came with us. A body with one lens on the desk gets used for product notes, studio daylight, and the walk to coffee. A two-body bag stays on the hook.',
      'The limits are honest. This is not a sports kit and not a studio strobe setup. Low light is good enough at a wide aperture that we leave the flash in the drawer. If your work is action or assigned events, keep the longer zooms. For a lab that photographs objects and rooms, one body was the whole answer.',
    ],
    specs: [
      { label: 'Body', value: 'Sony mirrorless, one camera' },
      { label: 'Lenses kept', value: 'Three compact primes' },
      { label: 'Left behind', value: 'Second body and the zoom bag' },
      { label: 'Best for', value: 'Objects, rooms, and notes from the field' },
    ],
    pros: [
      'Light enough to live on the desk',
      'Primes force a cleaner frame',
      'Files are easy to sort when there is only one body',
    ],
    cons: [
      'You will miss a zoom exactly twice a month',
      'Mixed lens mounts on the bench need a plan, not a pile',
    ],
    verdict: 'Buy fewer cameras. The body we kept is the one that was already on the table.',
    articleSlug: 'one-camera-for-the-whole-lab',
  },
  {
    slug: 'compact-mechanical-keyboard',
    name: 'Compact Custom Keyboard',
    category: 'Desk tools',
    price: '$150–$190',
    score: 4.5,
    summary: 'A compact mechanical board with hot-swap switches. It won the long typing test against a quiet low-profile keyboard.',
    image: '/images/product-keyboard.jpg',
    imageAlt: 'A compact mechanical keyboard with white, blue, green, red, and yellow keycaps and a loose switch beside it.',
    paragraphs: [
      'We typed the same essay on a low-profile aluminum board and on this compact mechanical keyboard. The low-profile one looked cleaner on a yellow desk. This one was the board we opened on day twelve without thinking.',
      'The layout keeps the arrows and a real Shift, which matters more than a matching set of keycaps. Switches are hot-swap, so the red tactile in the spare tray is a ten-minute decision, not a soldering project. The sound is present and low, not a clack that fills the studio.',
      'It will not vanish into a minimalist photo the way a silver low-profile board does. That is fine. Tools can look like tools. After ten thousand words, comfort beat camouflage.',
    ],
    specs: [
      { label: 'Layout', value: 'Compact, with arrows' },
      { label: 'Switches', value: 'Hot-swap, tactile' },
      { label: 'Keycaps', value: 'PBT, mixed colors on modifiers' },
      { label: 'Best for', value: 'Long writing more than short chat' },
    ],
    pros: [
      'Typing feel stays consistent past an hour',
      'Switches change without tools beyond a puller',
      'Arrows and modifiers are full size',
    ],
    cons: [
      'Louder than the low-profile board on the same desk',
      'The colorful modifiers are a look, not a camouflage',
    ],
    verdict: 'The keyboard we recommend when the work is actual paragraphs.',
    articleSlug: 'keyboards-after-ten-thousand-words',
  },
  {
    slug: 'espresso-bar-essentials',
    name: 'Espresso Bar Essentials',
    category: 'Kitchen',
    price: '$80–$140 for the bar tools',
    score: 4.3,
    summary: 'Portafilters, fresh beans, and a repeatable milk drink. The part of the home bar we still use on a weekday.',
    image: '/images/product-espresso.jpg',
    imageAlt: 'Three espresso portafilters holding a milk drink, ground coffee, and whole beans on a steel counter.',
    paragraphs: [
      'Most home espresso advice starts with a machine. Ours started with the mess. After ninety days, the objects still on the bar were boring and specific: a basket we understand, beans dated in the last two weeks, and a milk drink we can repeat without a diagram.',
      'The photo on the bench is the whole method. One portafilter of beans, one of grounds, one of a finished cup. If any of the three looks neglected, the shot will too. Gear downstream of that — the compact machine, the pitcher, the towel — only matters once this trio is dull and reliable.',
      'We are not recommending a trophy machine. We are recommending the smaller purchase that changed the drinks: consistent baskets and beans we actually finish. The Friday tasting in the studio got quieter and better when we stopped swapping gadgets.',
    ],
    specs: [
      { label: 'Kept', value: 'Basket, beans, milk routine' },
      { label: 'Cadence', value: 'Beans used inside two weeks' },
      { label: 'Lived with', value: 'Ninety days' },
      { label: 'Best for', value: 'Weekday drinks, not a café cosplay' },
    ],
    pros: [
      'A visible checklist before you pull a shot',
      'Cheaper than another machine',
      'Makes the rest of the setup easier to judge',
    ],
    cons: [
      'Will not fix a grinder that drifts every morning',
      'Milk drinks still need practice, not a new portafilter',
    ],
    verdict: 'Start here. A better basket and fresher beans beat the next stainless upgrade.',
    articleSlug: 'ninety-days-on-the-espresso-bar',
  },
];

/**
 * 按 slug 查找产品。
 * @param {string} slug
 * @returns {Product | undefined}
 */
export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
