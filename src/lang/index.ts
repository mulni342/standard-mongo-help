export type languages = 'ES' | 'EN';
import * as EN from './EN';
import * as ES from './ES';

export function Language(lang: languages) {
    if (lang == 'EN') return EN;
    else if (lang == 'ES') return ES;
    else {
        return EN;
    }
}
