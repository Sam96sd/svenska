import { defineVocabDeck } from '../define'

export default defineVocabDeck({
  id: 'vb-complex-structures',
  kind: 'structures',
  title: 'Band 8 grammar patterns',
  description:
    'Complex structures that lift Grammatical Range and Accuracy: conditionals, relative clauses, inversion, passives, nominalisation, participle clauses and clefts.',
  skills: ['writing', 'speaking'],
  cards: [
    // ---------- Conditionals ----------
    {
      id: 'second-conditional',
      term: 'If (+ past simple), … would (+ verb)',
      meaning:
        'second conditional: an imaginary or unlikely present or future situation and its result',
      example: 'If public transport were free, far fewer people would drive into city centres.',
      pos: 'second conditional',
      note: 'Use “were” for all persons in formal writing. Never “would” in the if-clause: not “If it would be free…”.',
    },
    {
      id: 'third-conditional',
      term: 'If (+ past perfect), … would have (+ past participle)',
      meaning: 'third conditional: an imagined past that did not happen, and its imagined result',
      example:
        'If the government had invested in flood defences earlier, the damage would have been far less severe.',
      pos: 'third conditional',
      note: 'Good for evaluating past policies. Not “If they would have invested…”. “Could / might have” also work in the result.',
    },
    {
      id: 'mixed-conditional',
      term: 'If (+ past perfect), … would (+ verb) now',
      meaning: 'mixed conditional: a different past would have changed the present',
      example:
        'If cities had planned for population growth decades ago, housing would not be so expensive now.',
      pos: 'mixed conditional',
      note: 'Past cause, present result. Shows control of time reference, which examiners notice at Band 8.',
    },
    {
      id: 'inverted-second-conditional',
      term: 'Were + subject + to + verb, …',
      meaning: 'formal inverted conditional for an unlikely future action',
      example:
        'Were governments to tax sugary drinks more heavily, childhood obesity rates would probably fall.',
      pos: 'inverted conditional',
      note: 'Replaces “If governments taxed…”. No “if”. Very formal: one per essay is plenty, and it sounds odd in casual speech.',
    },
    {
      id: 'inverted-third-conditional',
      term: 'Had (+ subject + past participle), … would have …',
      meaning: 'formal inverted third conditional about an unreal past',
      example:
        'Had local authorities listened to residents, the new motorway would never have been approved.',
      pos: 'inverted conditional',
      note: 'Replaces “If local authorities had listened…”. Negative: “Had they not listened…”, not “Hadn’t they listened…”.',
    },
    {
      id: 'inverted-first-conditional',
      term: 'Should (+ subject + verb), …',
      meaning: 'formal inverted conditional for a possible but uncertain future event',
      example:
        'Should the trial prove successful, the scheme will be extended to every school in the country.',
      pos: 'inverted conditional',
      note: 'Replaces “If the trial proves…”. Base verb after the subject: “Should it prove”, not “Should it proves”.',
    },
    {
      id: 'provided-that',
      term: 'Provided (that) …, …',
      meaning: 'only if a particular condition is met',
      example:
        'Provided that it is properly supervised, social media can be beneficial for teenagers.',
      pos: 'conditional conjunction',
      note: 'Stronger and more precise than “if”. Present tense for future meaning: not “Provided that it will be supervised”.',
    },
    // ---------- Relative clauses ----------
    {
      id: 'non-defining-relative',
      term: '…, which/who …, … (non-defining)',
      meaning: 'adds extra information about a noun that is already identified',
      example:
        'Singapore, which has one of the best school systems in the world, invests heavily in teacher training.',
      pos: 'non-defining relative clause',
      note: 'Commas on both sides. Never “that” in a non-defining clause: not “Singapore, that has…”.',
    },
    {
      id: 'sentential-which',
      term: '…, which means that … (whole clause)',
      meaning: '“which” refers back to the whole previous clause, not one noun',
      example:
        'Many graduates cannot find work in their field, which means that their skills are wasted.',
      pos: 'sentential relative clause',
      note: 'Always a comma before “which”. Not “what means” and not “this means” after a comma (that creates a comma splice).',
    },
    {
      id: 'preposition-which',
      term: 'to which / in which / by which …',
      meaning: 'formal relative clause with the preposition before “which”',
      example:
        'Children’s progress depends on the extent to which their parents are involved in their education.',
      pos: 'preposition + relative pronoun',
      note: 'Formal alternative to ending with a preposition. Never “that” after a preposition: not “the extent to that”.',
    },
    {
      id: 'whose-clause',
      term: '…, whose (+ noun) …',
      meaning: 'shows possession inside a relative clause',
      example:
        'Farmers, whose incomes depend on the weather, are especially vulnerable to climate change.',
      pos: 'relative clause (possessive)',
      note: 'Works for organisations and things too: “countries whose economies rely on oil”. Not “who’s”.',
    },
    // ---------- Inversion ----------
    {
      id: 'not-only-but-also',
      term: 'Not only … but also …',
      meaning: 'emphasises two points, with the second adding to the first',
      example: 'Not only does cycling reduce pollution, but it also improves public health.',
      pos: 'inversion',
      note: 'At the start of a sentence, invert the first clause: “Not only does cycling…”, not “Not only cycling reduces…”.',
    },
    {
      id: 'rarely-inversion',
      term: 'Rarely (+ auxiliary + subject) …',
      meaning: 'emphasises how uncommon something is',
      example: 'Rarely do politicians admit that their policies have failed.',
      pos: 'inversion',
      note: 'Same pattern with “Seldom”. Add “do/does/did” if there is no other auxiliary.',
    },
    {
      id: 'only-by-inversion',
      term: 'Only by (+ -ing) … (+ auxiliary + subject) …',
      meaning: 'emphasises that one method is the only way to achieve a result',
      example:
        'Only by investing in renewable energy can countries reduce their dependence on imported oil.',
      pos: 'inversion',
      note: 'The inversion is in the main clause: “can countries”, not “countries can”. Strong for solution paragraphs.',
    },
    {
      id: 'only-when-inversion',
      term: 'Only when … (+ auxiliary + subject) …',
      meaning: 'emphasises that a result depends on a condition being met first',
      example:
        'Only when the true cost of fast fashion is understood will consumers change their habits.',
      pos: 'inversion',
      note: 'Do not invert the “when” clause itself, only the main clause after it.',
    },
    {
      id: 'never-before-inversion',
      term: 'Never before (+ has/have + subject) …',
      meaning: 'emphasises that something is happening for the first time',
      example: 'Never before have so many people had access to free online education.',
      pos: 'inversion',
      note: 'Usually present perfect. Excellent for introductions about modern trends.',
    },
    {
      id: 'little-did-inversion',
      term: 'Little (+ did + subject) realise …',
      meaning: 'emphasises that people did not understand something at the time',
      example:
        'Little did the inventors of social media realise how addictive their platforms would become.',
      pos: 'inversion',
      note: 'Base verb after “did”: “realise”, not “realised”. Good in Speaking Part 2 stories too.',
    },
    {
      id: 'no-sooner-than',
      term: 'No sooner had … than …',
      meaning: 'one event happened immediately after another',
      example: 'No sooner had the new bridge opened than traffic in the town centre doubled.',
      pos: 'inversion',
      note: 'Pair with “than”, not “when”. Compare “Hardly had … when …”.',
    },
    // ---------- Passives ----------
    {
      id: 'it-is-widely-believed-that',
      term: 'It is widely believed that …',
      meaning: 'impersonal passive that reports a common view without naming who holds it',
      example:
        'It is widely believed that learning a musical instrument improves children’s concentration.',
      pos: 'impersonal passive',
      note: 'Also “It is often claimed / generally accepted that…”. Avoids “People think that…”, which sounds informal.',
    },
    {
      id: 'is-thought-to-have',
      term: '… is thought to have (+ past participle)',
      meaning: 'personal passive reporting a belief about a past event',
      example:
        'The rise in allergies is thought to have been caused partly by cleaner living conditions.',
      pos: 'passive + perfect infinitive',
      note: '“To have + past participle” for past events; “to be” for present ones: “is thought to be rising”.',
    },
    {
      id: 'modal-passive',
      term: 'need(s) to be (+ past participle)',
      meaning: 'passive after a modal-type verb, focusing on the action rather than who does it',
      example: 'Stricter rules on plastic packaging need to be introduced as soon as possible.',
      pos: 'modal passive',
      note: 'Same pattern: “should be banned”, “must be addressed”, “could be reduced”. Great for recommendations.',
    },
    // ---------- Nominalisation ----------
    {
      id: 'the-reduction-in',
      term: 'the reduction in (+ noun)',
      meaning: 'nominalisation: turning “reduce” into a noun phrase that can be a subject',
      example: 'The reduction in public funding has forced many museums to charge entry fees.',
      pos: 'nominalisation',
      note: 'Compare “The government reduced funding, so…”. Nouns pack more information into the subject. “Reduction in”, not “reduction of” for amounts.',
    },
    {
      id: 'the-introduction-of',
      term: 'The introduction of (+ noun) has …',
      meaning: 'nominalisation that makes a new policy or invention the subject',
      example: 'The introduction of congestion charges has led to a significant drop in traffic.',
      pos: 'nominalisation',
      note: 'Pair with cause-effect verbs: has led to / resulted in / given rise to.',
    },
    {
      id: 'a-lack-of',
      term: 'a lack of (+ noun)',
      meaning: 'nominalisation of “lack” to name a missing thing as the cause',
      example: 'A lack of affordable childcare prevents many parents from returning to work.',
      pos: 'nominalisation',
      note: 'Noun “lack of”; verb “lack” with no “of”: “Many towns lack childcare”, not “lack of childcare”.',
    },
    // ---------- Participle clauses ----------
    {
      id: 'having-participle',
      term: 'Having (+ past participle), …',
      meaning: 'perfect participle clause for an action completed before the main one',
      example:
        'Having completed their degrees, many graduates discover that they lack practical experience.',
      pos: 'participle clause',
      note: 'The subject of the main clause must do the “having” action. Avoid dangling participles: not “Having graduated, jobs are hard to find.”',
    },
    {
      id: 'faced-with',
      term: 'Faced with (+ noun), …',
      meaning: 'past participle clause showing the situation someone reacts to',
      example: 'Faced with rising energy bills, many households have installed solar panels.',
      pos: 'participle clause',
      note: 'Same pattern: “Given…”, “Encouraged by…”, “Built in the 1960s, …”. The main subject must match.',
    },
    {
      id: 'result-participle',
      term: '…, leaving / causing (+ object) …',
      meaning: 'present participle clause adding the result of the main action',
      example: 'The factory closed suddenly, leaving hundreds of workers without jobs.',
      pos: 'participle clause',
      note: 'Replaces “…, and this left…”. Comma before the participle.',
    },
    {
      id: 'when-ing',
      term: 'When / Before (+ -ing), …',
      meaning: 'shortened time clause with the same subject as the main clause',
      example:
        'When choosing a university, students should consider employment rates as well as rankings.',
      pos: 'reduced adverbial clause',
      note: 'Also “After / While / Since + -ing”. Only when both clauses share a subject.',
    },
    // ---------- Cleft sentences ----------
    {
      id: 'what-cleft',
      term: 'What matters most is …',
      meaning: 'wh-cleft that puts the key point at the end for emphasis',
      example:
        'What matters most is not how many hours students study, but how effectively they use that time.',
      pos: 'cleft sentence',
      note: 'Singular verb “is”. Also “What governments need to do is invest…” (bare verb after “is”).',
    },
    {
      id: 'it-cleft',
      term: 'It is … that … (it-cleft)',
      meaning: 'it-cleft that highlights one part of the sentence',
      example:
        'It is not the cost of healthy food but the lack of time that stops many families from cooking.',
      pos: 'cleft sentence',
      note: 'Useful for correcting a common belief: “It is not X but Y that…”. Use “who” for people: “It is teachers who…”.',
    },
    {
      id: 'the-reason-why',
      term: 'The reason why … is that …',
      meaning: 'cleft-like structure that foregrounds an explanation',
      example:
        'The reason why many young people leave rural areas is that there are few job opportunities.',
      pos: 'cleft sentence',
      note: '“The reason … is that”, not “is because” (that repeats the idea of reason).',
    },
    // ---------- Other Band 8 patterns ----------
    {
      id: 'the-more-the-more',
      term: 'The more …, the more …',
      meaning: 'comparative correlative: two things change together',
      example: 'The more time children spend outdoors, the healthier they tend to be.',
      pos: 'comparative correlative',
      note: 'Both halves start with “the” + comparative. Not “The more time…, more healthy they are.”',
    },
    {
      id: 'subjunctive-essential-that',
      term: 'It is essential that (+ subject + base verb / should)',
      meaning: 'mandative subjunctive after adjectives of necessity',
      example: 'It is essential that every child be taught to swim before leaving primary school.',
      pos: 'subjunctive',
      note: 'Base verb for every person (“be”, not “is”). British English often uses “should”: “…that every child should be taught…”. Same after vital, crucial, recommend, insist.',
    },
  ],
})
