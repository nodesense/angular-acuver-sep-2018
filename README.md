# Get Started
    npm install @angular/cli -g

    git clone https://github.com/nodesense/angular-acuver-sep-2018

    cd angular-acuver-sep-2018

    npm install

    ng serve
    
# App Module

    ng g component components/header
    ng g component components/footer
    ng g component components/home
    ng g component components/about
    ng g component components/contact
    ng g component components/not-found

    ng g component components/login


# Shared module

    ng g module shared

    ng g component shared/components/address
    ng g component shared/components/like

    ng g directive shared/directives/highlight

    ng g pipe shared/pipes/power
    ng g pipe shared/pipes/filter
    ng g pipe shared/pipes/sort

    ng g interface shared/models/address

    ng g service shared/services/data

    ng g guard shared/guards/auth
    ng g service shared/services/auth
    ng g service shared/services/interceptor
    ng g guard shared/guards/save-alert
    ng g interface shared/models/IDataSave

# Cart Module

    ng g module cart

    ng g component cart/components/cart

    ng g component cart/components/cart-summary

    ng g component cart/components/checkout

    ng g service cart/services/cart

    ng g class cart/models/cart-item

    ng g class cart/models/order
    

# product module

    ng g module product

    ng g component product/components/product-home

    ng g component product/components/product-list

    ng g component product/components/product-edit

    ng g component product/components/product-search

    ng g service product/services/product

    ng g class product/models/product

    ng g class product/models/brand

    

# Production Build
    npm install http-server -g

    ng build --prod

    cd dist/product-app

    http-server -c-1 