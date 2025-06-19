export class MenuOptions {
    goToSunglassesCatalog() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').click() //SUNGLASSES menu
        cy.url().should('include', 'sunglasses') //Validate URL

    }
    goToMensSunglassesCatalog() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover sunglasses menu
        cy.get('[href="/mens-sunglasses"] h3').should('contain.text', 'Men’s').click()//click on Mens options
        cy.url().should('include', '/mens-sunglasses') //validate URL
    }
    goToWomensSunglassesCatalog() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover sunglasses menu
        cy.get('[href="/womens-sunglasses"] h3').should('contain.text', "Women's").click()//click on womens options
        cy.url().should('include', '/gender:womens') //validate URL
    }
    goToChildrensSunglassesCatalog() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover sunglasses menu
        cy.get('[href="/childrens-sunglasses"] h3').should('contain.text', "Children's").click()//click on childrens options
        cy.url().should('include', '/childrens-sunglasses') //validate URL
    }
    goToEyeglassesCatalog() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').click() //EYEGLASSES menu
        cy.url().should('include', 'eyeglasses') //validate URL
    }
    goToMensEyeglassesCatalog() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').trigger('mouseover') //Hover eyeglasses menu
        cy.get('[href="/mens-eyeglasses"] h3').should('contain.text', 'Men’s').click()//click on Mens options
        cy.url().should('include', 'mens') //validate URL
    }
    goToWomensEyeglassesCatalog() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').trigger('mouseover') //Hover eyeglasses menu
        cy.get('[href="/womens-eyeglasses"] h3').should('contain.text', 'Women').click()//click on Womens options
        cy.url().should('include', 'womens') //validate URL
    }
    goToChildrenEyeglassesCatalog() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').trigger('mouseover') //Hover eyeglasses menu
        cy.get('[href="/childrens-eyeglasses"] h3').should('contain.text', "Children's").click()//click on Womens options
        cy.url().should('include', '/childrens-eyeglasses') //validate URL
    }
    goToContactLenseCatalog() {
        cy.get('.dropdown [href="/contact-lenses"]').should('contain.text', 'CONTACT LENSES').click() //CONTACT LENSES menu
        cy.url().should('include', '/contact-lenses') //Validate URL
    }
    goToReadersCatalog() {
        cy.get('.dropdown [href="/readers"]').should('contain.text', 'Readers').click() //Readres MENU
        cy.url().should('include', '/readers') //Validate URL
    }
    goToEyecareCatalog() {
        cy.get('.dropdown [href="https://www.ezcontacts.com/eye-care"]').should('contain.text', 'Eye Care').click() //EYE CARE Menu
        cy.url().should('include', '/eye-care') //Validate URL
    }
    goToEyewearClearanceCatalog() {
        cy.get('.dropdown [href="/eyewear/clearance:yes"]').should('contain.text', 'Clearance').click() //CLEARANCE MENU
        cy.url().should('include', '/eyewear/clearance:yes') //Validate URL
    }
    goToAviatorShapeSunglasses() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover 
        cy.get('.frame-shapes [href="/sunglasses/shape:aviator"]').click() //Click Aviator icon
        cy.url().should('include', '/sunglasses/shape:aviator') //Validate URL
    }
    goToRectangleShapeSunglasses() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover 
        cy.get('.frame-shapes [href="/sunglasses/shape:rectangle"]').click() //Click Rectangle icon
        cy.url().should('include', '/sunglasses/shape:rectangle') //Validate URL
    }
    goToOvalShapeSunglasses() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover 
        cy.get('.frame-shapes [href="/sunglasses/shape:oval"]').click() //Click Oval icon
        cy.url().should('include', '/sunglasses/shape:oval') //Validate URL
    }
    goToCateyeShapeSunglasses() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover 
        cy.get('.frame-shapes [href="/sunglasses/shape:cat-eye"]').click() //Click Cat-eye icon
        cy.url().should('include', '/sunglasses/shape:cat-eye') //Validate URL
    }
    goToRoundShapeSunglasses() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover 
        cy.get('.frame-shapes [href="/sunglasses/shape:round"]').click() //Click round shape icon
        cy.url().should('include', '/sunglasses/shape:round') //Validate URL
    }
    goToTomFordSunglasses() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover 
        cy.get('[href="/sunglasses/brand:tom-ford"]').should('exist').click() //TOM-FORD
        cy.url().should('include', '/sunglasses/brand:tom-ford') //Validate URL
    }
    goToPersolSunglasses() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover 
        cy.get('[href="/sunglasses/brand:persol"]').eq(0).should('exist').click() //PERSOL
        cy.url().should('include', '/sunglasses/brand:persol') //Validate URL
    }
    goToBurberrySunglasses() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover 
        cy.get('[href="/sunglasses/brand:burberry"]').should('exist').click() //burberry
        cy.url().should('include', '/sunglasses/brand:burberry') //Validate URL
    }
    goToRaybanSunglasses() {
        cy.get('.dropdown [href="/sunglasses"]').should('contain.text', 'SUNGLASSES').trigger('mouseover') //Hover 
        cy.get('[href="/sunglasses/brand:ray-ban"]').eq(0).should('exist').click() //Ray-ban
        cy.url().should('include', '/sunglasses/brand:ray-ban') //Validate URL
    }
    goToRectangleShapeEyeglasses() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').trigger('mouseover') //hover EYEGLASSES
        cy.get('[href="/eyeglasses/shape:rectangle"]').should('exist').click() //RECTANGLE EYEGLASSES
        cy.url().should('include', '/eyeglasses/shape:rectangle') //Validate URL
    }
    goToOvalShapeEyeglasses() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').trigger('mouseover') //hover EYEGLASSES
        cy.get('[href="/eyeglasses/shape:oval"]').should('exist').click() //OVAL EYEGLASSES
        cy.url().should('include', '/eyeglasses/shape:oval') //Validate URL
    }
    goToCateyeShapeEyeglasses() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').trigger('mouseover') //hover EYEGLASSES
        cy.get('[href="/eyeglasses/shape:cat-eye"]').should('exist').click() //CAT-EYE EYEGLASSES
        cy.url().should('include', '/eyeglasses/shape:cat-eye') //Validate URL
    }
    goToRoundShapeEyeglasses() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').trigger('mouseover') //hover EYEGLASSES
        cy.get('[href="/eyeglasses/shape:round"]').should('exist').click() //Round shape EYEGLASSES
        cy.url().should('include', '/eyeglasses/shape:round') //Validate URL
    }
    goToTomfordEyeglasses() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').trigger('mouseover') //hover EYEGLASSES
        cy.get('[href="/eyeglasses/brand:tom-ford"]').should('exist').click() // TOMFORD EYEGLASSES
        cy.url().should('include', '/eyeglasses/brand:tom-ford') //validate URL
    }
    goToPersolEyeglasses() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').trigger('mouseover') //hover EYEGLASSES
        cy.get('.nav-brands [href="/eyeglasses/brand:persol"]').should('exist').click() // PERSOL EYEGLASSES
        cy.url().should('include', '/eyeglasses/brand:persol') //validate URL
    }
    goToRaybanEyeglasses() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').trigger('mouseover') //hover EYEGLASSES
        cy.get('.nav-brands [href="/eyeglasses/brand:ray-ban"]').should('exist').click() // RAY-BAN EYEGLASSES
        cy.url().should('include', '/eyeglasses/brand:ray-ban') //validate URL
    }
    goToBurberryEyeglasses() {
        cy.get('.dropdown [href="/eyeglasses"]').should('contain.text', 'EYEGLASSES').trigger('mouseover') //hover EYEGLASSES
        cy.get('.nav-brands [href="/eyeglasses/brand:burberry"]').should('exist').click() // BURBERRY EYEGLASSES
        cy.url().should('include', '/eyeglasses/brand:burberry') //validate URL
    }
    verifyContactLenseDropdown() {
        cy.get('.dropdown [href="/contact-lenses"]').should('contain.text', 'CONTACT LENSES').trigger('mouseover') //CONTACT LENSES hover
        cy.get('.nav-brands [href="/contact-lenses/brand:acuvue"]').should('exist') //ACUVUE brand
        cy.get('.nav-brands [href="/contact-lenses/brand:dailies"]').should('exist') //dailies brand
        cy.get('.nav-brands [href="/contact-lenses/brand:air-optix"]').should('exist') //air-optix brand
        cy.get('.nav-brands [href="/contact-lenses/brand:biofinity"]').should('exist') //biofinity brand
    }
    verifyContactLenseBrandOptions() {
        cy.get('.dropdown [href="/contact-lenses"]').should('contain.text', 'CONTACT LENSES').trigger('mouseover') //CONTACT LENSES hover

        const brands = '[href*="/contact-lenses/brand:"].nav-menu-link';
        cy.get(brands).each(($brand, index, $list) => {
            // Get the href attribute of each element
            const href = $brand.attr('href');
            //validate the href
            cy.wrap(href).should('include', '/contact-lenses/brand');
        });
    }
    verifyEyecareBrandOptions() {
        cy.get('.dropdown [href="https://www.ezcontacts.com/eye-care"]').should('contain.text', 'Eye Care') //EYE-CARE Menu
        const brands = '[href*="/collection"].nav-menu-link';
        cy.get(brands).each(($brand, index, $list) => {
            // Get the href attribute of each element
            const href = $brand.attr('href');
            //validate the href
            cy.wrap(href).should('include', '/collection');
        });
    }
}