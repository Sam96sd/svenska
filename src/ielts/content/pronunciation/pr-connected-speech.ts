import { definePronSet } from '../define'

export default definePronSet({
  id: 'pr-connected-speech',
  focus: 'connected-speech',
  title: 'Connected speech: linking, weak forms and elision',
  intro: [
    'Natural English does not separate words. **Linking**: a final consonant joins the next vowel (an_apple sounds like “a-napple”), and between two vowels a tiny /w/, /j/ or, in British English, /r/ appears (go_(w)_out, I_(j)_agree, four_(r)_of).',
    '**Weak forms**: small grammar words such as to, of, for, and, can and was are usually said with a weak /ə/: “to” = /tə/, “of” = /əv/, “can” = /kən/. They become strong only at the end of a sentence or when stressed.',
    '**Elision**: a /t/ or /d/ between two consonants often disappears: next_day sounds like “nex day”. Arabic speakers often stop between words, which makes speech sound slow and heavy. Listen, then copy the rhythm.',
  ],
  quiz: 'listen-repeat',
  items: [
    {
      text: 'She ate an apple and an orange.',
      note: 'She ate_an_apple_and_an_orange: “ei-tə-næ-pl-ə-nə-nɒ-rɪndʒ”. Every final consonant joins the next vowel.',
    },
    {
      text: "It's an amazing idea.",
      note: "It's_an_amazing_idea: “it-sə-nə-mei-zɪ-ŋai-dɪə”. Do not stop before “an” or “idea”.",
    },
    {
      text: 'Could you turn it off?',
      note: 'Turn_it_off sounds like “tɜː-nɪ-tɒf”. Three words, one smooth chunk.',
    },
    {
      text: "Let's go out tonight.",
      note: 'go_(w)_out: a light /w/ links the two vowels. Do not add a stop between them.',
    },
    {
      text: 'I agree with you.',
      note: 'I_(j)_agree: a light /j/ (“y”) links the two vowels: /aɪ jəˈɡriː/. “With you” is quick and weak.',
    },
    {
      text: 'There are four of us.',
      note: 'Linking r: in British English the r is silent in “four” alone, but you hear it before a vowel: four_r_of_us /fɔːr əv ʌs/. Same in “there_r_are”.',
    },
    {
      text: 'For example, many students work part-time.',
      note: 'For_r_example /fər ɪɡˈzɑːmpl/: weak “for” plus a linking r. Never “for… example” with a stop.',
    },
    {
      text: 'I want to go to the park.',
      note: 'Both “to” are weak: /tə/. I WANT tə GO tə the PARK. Do not say a full “too”.',
    },
    {
      text: "It's a lot of work.",
      note: '“Of” is weak /əv/ and links: a lot_of /əˈlɒtəv/. It can sound almost like “a lotta”.',
    },
    {
      text: "I've been waiting for an hour.",
      note: '“For” is weak /fə/, and the r links to “an”: for_r_an_hour /fər ən aʊə/. The h in “hour” is silent.',
    },
    {
      text: "I can swim, but I can't dive.",
      note: '“Can” is weak /kən/; “can’t” is strong /kɑːnt/ and stressed. In British English the vowel tells them apart, so the /t/ can be very light.',
    },
    {
      text: 'Can you drive? Yes, I can.',
      note: 'Weak /kən/ in the question, strong /kæn/ at the end of the short answer. A final “can” is never weak.',
    },
    {
      text: 'She was tired and hungry.',
      note: '“Was” = /wəz/, “and” = /ən/. tired_and links: “tai-ə-dən”.',
    },
    {
      text: 'We had fish and chips.',
      note: '“And” shrinks to /ən/ or even /n/: fish_n_chips. This happens in many fixed pairs: salt and pepper, black and white.',
    },
    {
      text: "I'll call you the next day.",
      note: 'Elision: the /t/ in “next” disappears before a consonant: /neks deɪ/. Saying every consonant here sounds unnatural.',
    },
    {
      text: 'We met last week.',
      note: 'Elision: last_week /lɑːs wiːk/. The /t/ drops between /s/ and /w/. Keep the /t/ in “met” light.',
    },
    {
      text: 'You must be tired.',
      note: 'Weak form and elision together: “must” = /məs/, so must_be sounds like /məs bi/.',
    },
    {
      text: 'Did you enjoy it?',
      note: 'Did_you joins into /dɪdʒu/ (“didja”), and enjoy_(j)_it links with a /j/: /dɪdʒu ɪnˈdʒɔɪ jɪt/.',
    },
  ],
})
