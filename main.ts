//% weight=100 color=#0fbc11 icon="↻"
namespace usefulBlocks {
    /**
     * Führt die Schleife aus, solange die Bedingung wahr ist.
     */
    //% block="while %condition=logic_boolean do"
    export function whileLoop(condition: () => boolean, body: () => void): void {
        while (condition()) {
            body();
        }
    }
}