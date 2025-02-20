---
title: ads_sponsored_products_advertised_product
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table ads_sponsored_products_advertised_product
		lineageTag: 27496e1d-c7e2-4075-9020-4be78c8c605e

		column id
			dataType: int64
			formatString: 0
			lineageTag: 1ad5a0ae-991c-4198-9795-7be47988ea99
			summarizeBy: sum
			sourceColumn: id

			annotation SummarizationSetBy = Automatic

		column _created_on
			dataType: dateTime
			formatString: General Date
			lineageTag: 320a24d3-98ad-4054-820b-4bee74866950
			summarizeBy: none
			sourceColumn: _created_on

			variation Variation
				isDefault
				relationship: a6d89419-df0d-4321-a2f5-a0c981f43014
				defaultHierarchy: LocalDateTable_0997a33d-6a22-4181-aa25-d73136bfd5a0.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column _last_updated_on
			dataType: dateTime
			formatString: General Date
			lineageTag: 2fc8ffb4-9266-4828-a1de-3de12cbc51e2
			summarizeBy: none
			sourceColumn: _last_updated_on

			variation Variation
				isDefault
				relationship: ff59109e-cb71-4e26-a70e-5027342613ec
				defaultHierarchy: LocalDateTable_43d7e40e-955f-4c72-a923-7f5d2ca9f4d5.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column _revision
			dataType: int64
			formatString: 0
			lineageTag: d4564ca0-7f68-41f4-b23a-5628b9280ffa
			summarizeBy: sum
			sourceColumn: _revision

			annotation SummarizationSetBy = Automatic

		column _partneruuid
			dataType: string
			lineageTag: 55151593-5b1f-44b2-8b74-132daf26bed0
			summarizeBy: none
			sourceColumn: _partneruuid

			annotation SummarizationSetBy = Automatic

		column date
			dataType: dateTime
			formatString: mm/dd/yyyy
			lineageTag: e6c912e4-91b3-4871-9fab-64d24257c2e7
			summarizeBy: none
			sourceColumn: date

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

			annotation PBI_FormatHint = {"isDateTimeCustom":true}

		column currency
			dataType: string
			lineageTag: 00b4e2cb-489d-4955-a067-4d2045c96519
			summarizeBy: none
			sourceColumn: currency

			annotation SummarizationSetBy = Automatic

		column campaign_name
			dataType: string
			lineageTag: 119d716c-7a11-4ef0-9c74-24445612b9ba
			summarizeBy: none
			sourceColumn: campaign_name

			annotation SummarizationSetBy = Automatic

		column ad_group_name
			dataType: string
			lineageTag: ec31a7b9-4552-4753-bf8e-ba5a43591cab
			summarizeBy: none
			sourceColumn: ad_group_name

			annotation SummarizationSetBy = Automatic

		column advertised_sku
			dataType: string
			lineageTag: aeadee46-4e40-472c-bc28-01682997f7bc
			summarizeBy: none
			sourceColumn: advertised_sku

			annotation SummarizationSetBy = Automatic

		column advertised_asin
			dataType: string
			lineageTag: fafa709e-6424-4134-84c4-6bcd10bf998f
			summarizeBy: none
			sourceColumn: advertised_asin

			annotation SummarizationSetBy = Automatic

		column impressions
			dataType: int64
			formatString: 0
			lineageTag: 47b2d9d8-4190-494e-ac37-4b4474393f67
			summarizeBy: sum
			sourceColumn: impressions

			annotation SummarizationSetBy = Automatic

		column clicks
			dataType: int64
			formatString: 0
			lineageTag: d41c6cc1-8cfa-4958-8264-cc2a38705a31
			summarizeBy: sum
			sourceColumn: clicks

			annotation SummarizationSetBy = Automatic

		column click_thru_rate_ctr
			dataType: double
			formatString: 0.00%;-0.00%;0.00%
			lineageTag: 2d895103-6978-48e7-89f4-f4a96fd7cd57
			summarizeBy: sum
			sourceColumn: click_thru_rate_ctr

			annotation SummarizationSetBy = Automatic

		column cost_per_click_cpc
			dataType: double
			formatString: \$#,0.00;(\$#,0.00);\$#,0.00
			lineageTag: 91482213-9918-4621-805c-7fe79ae9a651
			summarizeBy: sum
			sourceColumn: cost_per_click_cpc

			annotation SummarizationSetBy = Automatic

		column spend
			dataType: double
			lineageTag: 5544f935-9075-4701-8d34-4a55689e83a3
			summarizeBy: sum
			sourceColumn: spend

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 7_day_total_sales
			dataType: double
			lineageTag: 5930dec2-5ffa-4baa-a591-7d7b323af22b
			summarizeBy: sum
			sourceColumn: 7_day_total_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 7_day_total_orders
			dataType: int64
			formatString: 0
			lineageTag: 7a11dd62-2ad9-4b2a-b969-8014966b6290
			summarizeBy: sum
			sourceColumn: 7_day_total_orders

			annotation SummarizationSetBy = Automatic

		column 7_day_total_units
			dataType: int64
			formatString: 0
			lineageTag: 015b1ba5-b27c-4eb7-9739-33a37e917ea5
			summarizeBy: sum
			sourceColumn: 7_day_total_units

			annotation SummarizationSetBy = Automatic

		column 7_day_advertised_sku_units
			dataType: int64
			formatString: 0
			lineageTag: 0b770088-7e78-4a09-8f12-da871d0a2e37
			summarizeBy: sum
			sourceColumn: 7_day_advertised_sku_units

			annotation SummarizationSetBy = Automatic

		column 7_day_other_sku_units
			dataType: double
			formatString: 0
			lineageTag: ef40ef30-9573-4f24-b67c-2ebdd125220b
			summarizeBy: sum
			sourceColumn: 7_day_other_sku_units

			annotation SummarizationSetBy = Automatic

		column 7_day_advertised_sku_sales
			dataType: double
			lineageTag: 668f00b2-81c4-42bd-ae1b-1c74e4f47c80
			summarizeBy: sum
			sourceColumn: 7_day_advertised_sku_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 7_day_other_sku_sales
			dataType: double
			lineageTag: 22c5858e-97a6-49a0-bc51-dc0adcb7d385
			summarizeBy: sum
			sourceColumn: 7_day_other_sku_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column portfolio_id
			dataType: string
			lineageTag: ac547c74-c235-4e74-8f7e-156128c5aa67
			summarizeBy: none
			sourceColumn: portfolio_id

			annotation SummarizationSetBy = Automatic

		column campaign_id
			dataType: string
			lineageTag: 0984ae4f-bf72-4060-bd4d-d6779070d2af
			summarizeBy: none
			sourceColumn: campaign_id

			annotation SummarizationSetBy = Automatic

		column budget
			dataType: double
			lineageTag: c048068b-1786-486c-8df9-8cd2ea9e998e
			summarizeBy: sum
			sourceColumn: budget

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column campaign_budget_type
			dataType: string
			lineageTag: 8fba06aa-990e-4240-ac97-0cf3099c04c7
			summarizeBy: none
			sourceColumn: campaign_budget_type

			annotation SummarizationSetBy = Automatic

		column status
			dataType: string
			lineageTag: 19393fa9-f329-4aec-ae0b-3adf3db07b75
			summarizeBy: none
			sourceColumn: status

			annotation SummarizationSetBy = Automatic

		column ad_group_id
			dataType: string
			lineageTag: 17e20dda-9daa-41c5-9901-429d2aa8ec25
			summarizeBy: none
			sourceColumn: ad_group_id

			annotation SummarizationSetBy = Automatic

		column ad_id
			dataType: string
			lineageTag: 6c1f340d-1658-4236-ae08-678f7939aad3
			summarizeBy: none
			sourceColumn: ad_id

			annotation SummarizationSetBy = Automatic

		column 1_day_total_orders
			dataType: int64
			formatString: 0
			lineageTag: c48d190c-8932-4be3-90a5-db714b62a515
			summarizeBy: sum
			sourceColumn: 1_day_total_orders

			annotation SummarizationSetBy = Automatic

		column 14_day_total_orders
			dataType: int64
			formatString: 0
			lineageTag: 76984fd6-a954-41e9-afc4-8fafe4c59034
			summarizeBy: sum
			sourceColumn: 14_day_total_orders

			annotation SummarizationSetBy = Automatic

		column 30_day_total_orders
			dataType: int64
			formatString: 0
			lineageTag: 5e917bdf-5abc-491e-872c-6b479e76bf1e
			summarizeBy: sum
			sourceColumn: 30_day_total_orders

			annotation SummarizationSetBy = Automatic

		column 1_day_advertised_sku_orders
			dataType: int64
			formatString: 0
			lineageTag: 1064fd92-d414-4cb4-89a7-8a3ec8d03a27
			summarizeBy: sum
			sourceColumn: 1_day_advertised_sku_orders

			annotation SummarizationSetBy = Automatic

		column 7_day_advertised_sku_orders
			dataType: int64
			formatString: 0
			lineageTag: 60c08a23-8a02-4973-9f2e-5da7dc1da479
			summarizeBy: sum
			sourceColumn: 7_day_advertised_sku_orders

			annotation SummarizationSetBy = Automatic

		column 14_day_advertised_sku_orders
			dataType: int64
			formatString: 0
			lineageTag: 847e99ea-db4f-4ad2-a24c-58db5f218193
			summarizeBy: sum
			sourceColumn: 14_day_advertised_sku_orders

			annotation SummarizationSetBy = Automatic

		column 30_day_advertised_sku_orders
			dataType: int64
			formatString: 0
			lineageTag: 13f15b95-2257-4542-9373-88e13cbac8cd
			summarizeBy: sum
			sourceColumn: 30_day_advertised_sku_orders

			annotation SummarizationSetBy = Automatic

		column 1_day_total_units
			dataType: int64
			formatString: 0
			lineageTag: fc26fbb4-2574-42e5-8d8b-a2bef4d3257d
			summarizeBy: sum
			sourceColumn: 1_day_total_units

			annotation SummarizationSetBy = Automatic

		column 14_day_total_units
			dataType: int64
			formatString: 0
			lineageTag: ee171716-03bf-49db-b338-20e881874a19
			summarizeBy: sum
			sourceColumn: 14_day_total_units

			annotation SummarizationSetBy = Automatic

		column 30_day_total_units
			dataType: int64
			formatString: 0
			lineageTag: 2c754743-cc12-44a8-acba-c0f154311807
			summarizeBy: sum
			sourceColumn: 30_day_total_units

			annotation SummarizationSetBy = Automatic

		column 1_day_total_sales
			dataType: double
			lineageTag: 03d236d4-5eb7-485e-85c3-d6bb45bc9c2e
			summarizeBy: sum
			sourceColumn: 1_day_total_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 14_day_total_sales
			dataType: double
			lineageTag: ae5f6a35-3f61-4a2c-bcb2-f1235208efda
			summarizeBy: sum
			sourceColumn: 14_day_total_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 30_day_total_sales
			dataType: double
			lineageTag: ee2bffef-fdd6-43d3-ab0a-5b352af695b8
			summarizeBy: sum
			sourceColumn: 30_day_total_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 1_day_advertised_sku_sales
			dataType: double
			lineageTag: 2a10c250-e078-4553-8999-7f6b85577ca3
			summarizeBy: sum
			sourceColumn: 1_day_advertised_sku_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 14_day_advertised_sku_sales
			dataType: double
			lineageTag: 9ca6c1f4-ee5d-425c-88d4-4d558228840c
			summarizeBy: sum
			sourceColumn: 14_day_advertised_sku_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 30_day_advertised_sku_sales
			dataType: double
			lineageTag: 843493bf-6f99-4c74-98ce-3b2b3a76f895
			summarizeBy: sum
			sourceColumn: 30_day_advertised_sku_sales

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column 1_day_advertised_sku_units
			dataType: int64
			formatString: 0
			lineageTag: 0c84b8ad-7c81-42bd-8456-3421e665eadc
			summarizeBy: sum
			sourceColumn: 1_day_advertised_sku_units

			annotation SummarizationSetBy = Automatic

		column 14_day_advertised_sku_units
			dataType: int64
			formatString: 0
			lineageTag: c78d7de3-9b9d-4a81-bec0-5f68a879e74f
			summarizeBy: sum
			sourceColumn: 14_day_advertised_sku_units

			annotation SummarizationSetBy = Automatic

		column 30_day_advertised_sku_units
			dataType: int64
			formatString: 0
			lineageTag: 47ed3705-3ff5-4740-97a6-b04ed7c21d5e
			summarizeBy: sum
			sourceColumn: 30_day_advertised_sku_units

			annotation SummarizationSetBy = Automatic

		column kindle_edition_normalized_pages_read_14d
			dataType: int64
			formatString: 0
			lineageTag: 09a31639-5fac-458b-a003-933d340b141d
			summarizeBy: sum
			sourceColumn: kindle_edition_normalized_pages_read_14d

			annotation SummarizationSetBy = Automatic

		column kindle_edition_normalized_pages_royalties_14d
			dataType: double
			lineageTag: 52259ada-644b-4bf9-80e4-d8a9482860bc
			summarizeBy: sum
			sourceColumn: kindle_edition_normalized_pages_royalties_14d

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column acos_clicks_7d
			dataType: double
			lineageTag: 4e467713-e990-4957-9fa6-3ce6e2b55eb4
			summarizeBy: sum
			sourceColumn: acos_clicks_7d

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column acos_clicks_14d
			dataType: double
			lineageTag: ed9bb2c6-d922-436a-8e56-af3ce6b1aec3
			summarizeBy: sum
			sourceColumn: acos_clicks_14d

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column roas_clicks_7d
			dataType: double
			lineageTag: 0c30b030-456d-4943-96b2-e9d44091a202
			summarizeBy: sum
			sourceColumn: roas_clicks_7d

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column roas_clicks_14d
			dataType: double
			lineageTag: 5219dd3b-7a98-4b61-beae-85cd5443f58a
			summarizeBy: sum
			sourceColumn: roas_clicks_14d

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column _row_index
			dataType: int64
			formatString: 0
			lineageTag: 251c4caa-9d46-49cc-8522-fc82818b8c0e
			summarizeBy: sum
			sourceColumn: _row_index

			annotation SummarizationSetBy = Automatic

		partition ads_sponsored_products_advertised_product = m
			mode: import
			source =
					let
					    Source = Odbc.DataSource("dsn=WAP", [HierarchicalNavigation=true]),
					    #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database" = Source{[Name="f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec",Kind="Database"]}[Data],
					    public_Schema = #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database"{[Name="public",Kind="Schema"]}[Data],
					    ads_sponsored_products_advertised_product_View = public_Schema{[Name="ads_sponsored_products_advertised_product",Kind="View"]}[Data],
					    #"Changed Type" = Table.TransformColumnTypes(ads_sponsored_products_advertised_product_View,{{"date", type date}}),
					    #"Filtered Rows" = Table.SelectRows(#"Changed Type", each Date.IsInPreviousNMonths([date], 3) or Date.IsInCurrentMonth([date]))
					in
					    #"Filtered Rows"

		annotation PBI_ResultType = Table
```

## M

### Overview

```
let
    Source = Odbc.DataSource("dsn=WAP", [HierarchicalNavigation=true]),
    #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database" = Source{[Name="f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec",Kind="Database"]}[Data],
    public_Schema = #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database"{[Name="public",Kind="Schema"]}[Data],
    ads_sponsored_products_advertised_product_View = public_Schema{[Name="ads_sponsored_products_advertised_product",Kind="View"]}[Data],
    #"Changed Type" = Table.TransformColumnTypes(ads_sponsored_products_advertised_product_View,{{"date", type date}}),
    #"Filtered Rows" = Table.SelectRows(#"Changed Type", each Date.IsInPreviousNMonths([date], 3) or Date.IsInCurrentMonth([date]))
in
    #"Filtered Rows"
```

### Step by step analysis

```
let
    // Step 1: Connect to the ODBC data source
    Source = Odbc.DataSource("dsn=WAP", [HierarchicalNavigation=true]),
    
    // Step 2: Navigate to the specific database
    #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database" = Source{[Name="f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec",Kind="Database"]}[Data],
    
    // Step 3: Navigate to the specific schema
    public_Schema = #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database"{[Name="public",Kind="Schema"]}[Data],
    
    // Step 4: Navigate to the specific view
    ads_sponsored_products_advertised_product_View = public_Schema{[Name="ads_sponsored_products_advertised_product",Kind="View"]}[Data],
    
    // Step 5: Change the data type of the "date" column
    #"Changed Type" = Table.TransformColumnTypes(ads_sponsored_products_advertised_product_View,{{"date", type date}}),
    
    // Step 6: Filter the rows based on the "date" column
    #"Filtered Rows" = Table.SelectRows(#"Changed Type", each Date.IsInPreviousNMonths([date], 3) or Date.IsInCurrentMonth([date]))
in
    #"Filtered Rows"
```

1. *Connect to the ODBC data source*: The `Odbc.DataSource` function is used to connect to an ODBC data source. The `dsn=WAP` parameter specifies the name of the data source.
2. *Navigate to the specific database*: The `Source` variable is used to navigate to the specific database. The `{[Name="f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec",Kind="Database"]}[Data]` syntax is used to select the database with the specified name.
3. *Navigate to the specific schema*: The `public_Schema` variable is used to navigate to the specific schema. The `{[Name="public",Kind="Schema"]}[Data]` syntax is used to select the schema with the specified name.
4. *Navigate to the specific view*: The `ads_sponsored_products_advertised_product_View` variable is used to navigate to the specific view. The `{[Name="ads_sponsored_products_advertised_product",Kind="View"]}[Data]` syntax is used to select the view with the specified name.
5. *Change the data type of the "date" column*: The `Table.TransformColumnTypes` function is used to change the data type of the "date" column to `date`.
6. *Filter the rows based on the "date" column*: The `Table.SelectRows` function is used to filter the rows based on the "date" column. The `Date.IsInPreviousNMonths` and `Date.IsInCurrentMonth` functions are used to filter the rows to include only those with dates in the previous 3 months or the current month.
