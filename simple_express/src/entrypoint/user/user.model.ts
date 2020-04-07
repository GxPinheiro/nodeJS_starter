/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       name:
 *         type: string
 *       birthday:
 *         type: date
 *       password:
 *         type: string
 *       cellPhone:
 *         type: string
 *       cpf:
 *         type: string
 */
export class User {
    constructor(
        public nome: string,
        public agencia: date,
        public conta: string,
        public contaDigito: string,
        public carteiraLogada?: string,
    ) { }
}