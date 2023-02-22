describe('Pins', ()=>{

    it('Pins download', ()=>{


        Cypress.on('uncaught:exception', (err, runnable) => {
            
            return false
        })

        cy.visit('https://in.pinterest.com/')
        cy.wait(4000)
        cy.get('.wc1 > .oRi > .RCK').click()
        // cy.contains('Continue with Google').click()
        cy.get('#email').type('Siddharth.d@testriq.com')
        cy.get('#password').type('Logitech190421')
        cy.contains('.red','Log in').click({force:true})
        cy.wait(4000)
        cy.get('input').type('Nirvana {enter}')
        cy.wait(4000)
        // cy.get('[style="top: 0px; left: 0px; transform: translateX(252px) translateY(0px); width: 252px; height: 373px;"] > [style="padding-bottom: 16px; padding-left: 8px; padding-right: 8px;"] > [data-test-id="pin"] > [data-test-id="pinRepPresentation"] > .Jea > [aria-hidden="false"] > .sLG.zI7 > [style="height: 100%;"] > .Wk9 > .Pj7 > [data-test-id="pinrep-image"] > .KS5 > .ujU > :nth-child(1) > [data-test-id="non-story-pin-image"] > .XiG > .hCL').click()

    })
})