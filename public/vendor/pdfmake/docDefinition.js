// playground requires you to assign document definition to a variable called dd

var dd = {
	content: [
		{
			columns: [
				{
					 image: 'sampleImage.jpg',
    			     width: 150
				},
				{
				    alignment: 'right',
				    style: 'header',
					text: '\n\nProject Scope',
					size: 20
				}
			]
		},
        '\n',
		{
		    layout: 'lightHorizontalLines', // optional
            table: {
                headerRows: 1,
                align: 'right',
                widths: [ '*', 150, '*', 150 ],
        
                body: [
                  [ {text:'Details', style:'header'}, '', '', ''],
                  [ {text:'Company Name:', bold:'true'}, '__', {text:'Contact #:', bold:'true'}, '__'],
                  [ {text:'Contact Name:', bold:'true'}, '__', {text:'Email:', bold:'true'}, '__']
                ]
            }
		},
        '\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                headerRows: 1,
                align: 'right',
                widths: [ '*', 150, '*', 150 ],
        
                body: [
                  [ {text:'Project', style:'header'}, '', {text:'\nProject Code:', bold:'true'}, '\n__'],
                  [ {text:'Project Name:', bold:'true'}, '__', {text:'Date:', bold:'true'}, '__'],
                  [ {text:'Client Name:', bold:'true'}, '__', {text:'Address:', bold:'true'}, '__']
                ]
            }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // People and Pricing
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'People And Pricing', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', '*', '*', '*' ],
                body: [
                  [ {text:'Markup:', bold:'true'}, 'Plus __ %', '',''],
                  [ {text:'# of Builders:', bold:'true'}, ' __ People', {text:'Supervision:', bold:'true'}, '__ Hrs / Week'],
                  [ {text:'Administration:', bold:'true'}, '__ Hrs / Week', {text:'Project Management:', bold:'true'}, '__ Hrs / Week'],
                  [ {text:'Travel Distance:', bold:'true'}, '__ km', {text:'Travel Distance - Price:', bold:'true'}, '$ __  / km'],
                  [ {text:'No of Vehicles:', bold:'true'}, '__', '','']
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Site Arrangement
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Site Arrangement', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Site Access:', bold:'true'}, 'Plus __ %', {text:'Carpet Protection:', bold:'true'},'__'],
                  [ {text:'Space for Material Storage:', bold:'true'}, ' __ People', {text:'Carpet Protection:', bold:'true'}, '__ Hrs / Week'],
                  [ {text:'Living Arrangements:', bold:'true'}, '__', {text:'Allow Extra Site-Specific Time:', bold:'true'}, '__ hrs']
                ]
		    }
		},
	    '\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                //Safety Requirements
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Safety Requirements', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Site Sign:', bold:'true'}, '__', {text:'Security Fencing:', bold:'true'},'__'],
                  [ {text:'Fall-in Protection:', bold:'true'}, ' __ ', {text:'Crossing Protection:', bold:'true'}, '__'],
                  [ {text:'Living Arrangements:', bold:'true'}, '__', '','']
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Allowances and Insurances
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Allowances and Insurances', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Estimated Project Duration:', bold:'true'}, '__', {text:'All Risk Insurance:', bold:'true'},'__'],
                  [ {text:'Building Guarantee:', bold:'true'}, ' __ ','',''],
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Temporary Services
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Temporary Services', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Temporary Power:', bold:'true'}, '__', {text:'Temporary Water:', bold:'true'},'__', {text:'Site Shed:', bold:'true'},'__'],
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Professional Service Allowances
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Professional Service Allowances', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Plans:', bold:'true'}, '__', {text:'Geotechnical:', bold:'true'},'__'],
                  [ {text:'Engineer:', bold:'true'}, '__', {text:'Surveyor:', bold:'true'},'__'],
                  [ {text:'Council Fees:', bold:'true'}, '__', '','']
                ]
		    }
		},
		'\n\n\n',
		{text:'Exterior Scope', style:'headerBlue'},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', '*' ],
                body: [
                  [ {text:'Painting Exterior:', bold:'true'}, '__'],
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Wall Cladding:', bold:'true'}, '__', {text:'Type:', bold:'true'},'__'],
                  [ {text:'Work Required:', bold:'true'}, '__','','']
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Base Cladding:', bold:'true'}, '__', {text:'Type:', bold:'true'},'__'],
                  [ {text:'Work Required:', bold:'true'}, '__','','']
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Soffit Cladding:', bold:'true'}, '__', {text:'Type:', bold:'true'},'__'],
                  [ {text:'Work Required:', bold:'true'}, '__','','']
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Exterior Joinery:', bold:'true'}, '__', {text:'Type:', bold:'true'},'__'],
                  [ {text:'Work Required:', bold:'true'}, '__','','']
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Entrance Door:', bold:'true'}, '__', {text:'Type:', bold:'true'},'__'],
                ]
		    }
		},
	    '\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Roof', bold:'true'},'','',''],
                  [ {text:'Pitch:', bold:'true'}, '__', {text:'Cladding Type:', bold:'true'},'__'],
                  [ {text:'Work Required:', bold:'true'}, '__','','']
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Gutter', bold:'true'},'','',''],
                  [ {text:'Gutter Material:', bold:'true'}, '__', {text:'Profile:', bold:'true'},'__'],
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Downpipe', bold:'true'},'','',''],
                  [ {text:'Material:', bold:'true'}, '__', {text:'Profile:', bold:'true'},'__'],
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Fascia', bold:'true'},'','',''],
                  [ {text:'Fascia Type:', bold:'true'}, '__','',''],
                ]
		    }
		},
		'\n\n\n\n\n\n',
		{
			layout: 'lightHorizontalLines',
            table: {
                // Hard Landscaping
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Hard Landscaping', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Deck', bold:'true'}, '__', {text:'Type:', bold:'true'},'__'],
                  [ {text:'Work Required:', bold:'true'}, '__', '',''],
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Handrail', bold:'true'}, '__', {text:'Type:', bold:'true'},'__'],
                  [ {text:'Work Required:', bold:'true'}, '__', '',''],
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Paving', bold:'true'}, '__', {text:'Type:', bold:'true'},'__'],
                  [ {text:'Work Required:', bold:'true'}, '__', '',''],
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Driveway', bold:'true'}, '__', {text:'Type:', bold:'true'},'__'],
                  [ {text:'Work Required:', bold:'true'}, '__', '',''],
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Fencing', bold:'true'}, '__', {text:'Type:', bold:'true'},'__'],
                  [ {text:'Work Required:', bold:'true'}, '__', '',''],
                ]
		    }
		},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto' ],
                body: [
                  [ {text:'Other', bold:'true'}, '__' ],
                ]
		    }
		},
		'\n\n\n',
		{text:'Interior Scope', style:'headerBlue'},
		'\n',
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', '*' ],
                body: [
                  [ {text:'Painting Exterior:', bold:'true'}, '__'],
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Interior Trims
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Interior Trims', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', 'auto', 'auto', 'auto' ],
                body: [
                  [ {text:'Scotia Type:', bold:'true'}, '__', {text:'Skirting Type:', bold:'true'},'__'],
                  [ {text:'Window Architrave:', bold:'true'}, '__', {text:'Door Architrave:', bold:'true'},'__'],
                  [ {text:'Council Fees:', bold:'true'}, '__', '','']
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Interior Finishes
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Interior Finishes', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    table: {
                align: 'right',
                widths: [ 'auto', '*', '*' ],
                body: [
                  [ '', 'Floor Covering', 'Wall Finish'],
                  [ {text:'Kitchen: ', bold:'true'}, '__', '__'],
                  [ {text:'Living: ', bold:'true'}, '__', '__'],
                  [ {text:'Bedrooms: ', bold:'true'}, '__', '__'],
                  [ {text:'Bathrooms: ', bold:'true'}, '__', '__'],
                  [ {text:'Ensuite: ', bold:'true'}, '__', '__'],
                  [ {text:'Laundry: ', bold:'true'}, '__', '__'],
                  [ {text:'Other: ', bold:'true'}, {colSpan: 2, text: '__'}, '']
                  
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Windows and Doors
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Windows and Doors', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', '*' ],
                body: [
                  [ {text:'Interior Door Type:', bold:'true'}, '__',],
                  [ {text:'Door Hardware:', bold:'true'}, ' __ '],
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Windows and Doors
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Joinery Allowances', style:'header'}],
                  [''],
                ]
    
            }
		},
	    {
		    table: {
                align: 'right',
                widths: [ '*', '*' ],
                body: [
                  [ {text:'Areas: ', bold:'true'}, {text:'Amount: ', bold:'true'}],
                  [ {text:'Kitchen: ', bold:'true'}, '$__'],
                  [ {text:'Laundry: ', bold:'true'}, '$__'],
                  [ {text:'Wardrobe Masterbed: ', bold:'true'}, '$__'],
                  [ {text:'Wardrobe Other: ', bold:'true'}, '$__'],
                  [ {text:'Other: ', bold:'true'}, '$__']
                  
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Plumbing
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Plumbing', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', '*' ],
                body: [
                  [ {text:'Allowance Type:', bold:'true'}, '__',],
                  [ {text:'HWC:', bold:'true'}, '__'],
                  [ {text:'New Connection:', bold:'true'}, '__'],
                  [ {text:'Comments:', bold:'true'}, '__']
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Electrical
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Electrical', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', '*' ],
                body: [
                  [ {text:'Allowance Type:', bold:'true'}, '__',],
                  [ {text:'Distribution Board:', bold:'true'}, '__'],
                  [ {text:'New Connection:', bold:'true'}, '__'],
                  [ {text:'Comments:', bold:'true'}, '__']
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Drainage
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Drainage', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    layout: 'lightHorizontalLines',
		    table: {
                align: 'right',
                widths: [ 'auto', '*' ],
                body: [
                  [ {text:'New Connection:', bold:'true'}, '__'],
                  [ {text:'Comments:', bold:'true'}, '__']
                ]
		    }
		},
		'\n',
		{
			layout: 'lightHorizontalLines', // optional
            table: {
                // Electrical
                headerRows: 1,
                align: 'right',
                widths: ['*'],
                body: [
                  [{text:'Other', style:'header'}],
                  [''],
                ]
    
            }
		},
		{
		    table: {
                align: 'right',
                widths: [ 'auto', '*', '*' ],
                body: [
                  [ '', 'Demolition', 'Renovation'],
                  [ {text:'', bold:'true'}, '__', '__'],
                  [ {text:'', bold:'true'}, '__', '__'],
                  [ {text:'Comments: ', bold:'true'}, {colSpan: 2, text: '__'}, '']
                  
                ]
		    }
		},
		
		
		
	
	
	],
	styles: {
		header: {
			fontSize: 20,
			bold: true
		},
	    headerBlue: {
			fontSize: 30,
			bold: true,
			color: '#2b6ca3',
		},
		
		bigger: {
			fontSize: 15,
			italics: true
		}
	},
	defaultStyle: {
		columnGap: 20
	},
	
	footer: function(currentPage, pageCount) { return[{ text: 'Page ' + currentPage.toString() + ' of ' + pageCount, alignment: 'center', bold: true}]; }
	
}