export function sortAlphaNum(a,b) {
                  if (a.title === b.title) {
                      return 0;
                  }
                  if (typeof a.title === typeof b.title) {
                      return a.title < b.title ? -1 : 1;
                  }
                  return typeof a.title < typeof b.title ? -1 : 1;
              }