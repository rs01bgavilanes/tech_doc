---
title: Item$16a
description: Our most important dataset. Thread carefully.
---

## TMDL

```
createOrReplace

	table inventory_all_listings
		lineageTag: ea957d77-e936-4c88-9af5-c192d97263cb

		column _last_updated_on
			dataType: dateTime
			formatString: Long Date
			lineageTag: 09bbdf86-2c9a-4e78-aad1-f2f80d16aea5
			summarizeBy: none
			sourceColumn: _last_updated_on

			variation Variation
				isDefault
				relationship: c8d25117-7192-4709-b874-8c4724095ff6
				defaultHierarchy: LocalDateTable_1893dd84-bb19-46f7-bb06-dda02c2ad752.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

			annotation UnderlyingDateTimeDataType = Date

		column listing_id
			dataType: string
			lineageTag: bbb4859e-0547-4e67-8bf8-c6319c7bc3fa
			summarizeBy: none
			sourceColumn: listing_id

			annotation SummarizationSetBy = Automatic

		column seller_sku
			dataType: string
			lineageTag: 4c80f6dd-8e98-4bd0-95d3-0bebfb7d133a
			summarizeBy: none
			sourceColumn: seller_sku

			annotation SummarizationSetBy = Automatic

		column price
			dataType: double
			lineageTag: c3f104f8-6ebf-42c1-a8b2-87a0ec1f30ea
			summarizeBy: sum
			sourceColumn: price

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column open_date
			dataType: dateTime
			formatString: Long Date
			lineageTag: 77d69f1a-fbcc-4f7f-b177-4719305c26ed
			summarizeBy: none
			sourceColumn: open_date

			variation Variation
				isDefault
				relationship: 1a06501f-bfaa-45a1-a8d9-c99bc30a34a1
				defaultHierarchy: LocalDateTable_311b1c37-8d8f-4aa9-9391-5f32499417b1.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column asin1
			dataType: string
			lineageTag: 829e5bb0-e270-4fd5-a8c7-4da6f1e2767a
			summarizeBy: none
			sourceColumn: asin1

			annotation SummarizationSetBy = Automatic

		column id
			dataType: int64
			formatString: 0
			lineageTag: 3469c56b-ff0c-4659-a5e8-ffda856e0ec0
			summarizeBy: sum
			sourceColumn: id

			annotation SummarizationSetBy = Automatic

		column _created_on
			dataType: dateTime
			formatString: General Date
			lineageTag: 51ef4301-a7cf-48e2-aa24-4bf52cd62460
			summarizeBy: none
			sourceColumn: _created_on

			variation Variation
				isDefault
				relationship: 0c4961bf-49cf-4116-93de-3b671441b6bb
				defaultHierarchy: LocalDateTable_f903439f-5f75-494e-b23c-dc778b65f8c4.'Date Hierarchy'

			annotation SummarizationSetBy = Automatic

		column _revision
			dataType: int64
			formatString: 0
			lineageTag: d0b83d49-4fd9-4c03-8b82-076e7d851570
			summarizeBy: sum
			sourceColumn: _revision

			annotation SummarizationSetBy = Automatic

		column item_name
			dataType: string
			lineageTag: 0ce1b958-ac90-43ba-83b0-a712f6bfd9eb
			summarizeBy: none
			sourceColumn: item_name

			annotation SummarizationSetBy = Automatic

		column item_description
			dataType: string
			lineageTag: 63788e07-3c48-411d-b0c5-5f6847a095f7
			summarizeBy: none
			sourceColumn: item_description

			annotation SummarizationSetBy = Automatic

		column quantity
			dataType: int64
			formatString: 0
			lineageTag: 4c50dad7-1489-4002-99f5-b5fb43b89b79
			summarizeBy: sum
			sourceColumn: quantity

			annotation SummarizationSetBy = Automatic

		column image_url
			dataType: string
			lineageTag: 50c1b6f4-b5de-496e-95e2-43ee637a5281
			summarizeBy: none
			sourceColumn: image_url

			annotation SummarizationSetBy = Automatic

		column item_is_marketplace
			dataType: string
			lineageTag: df89c03e-8bb1-40b6-87a2-c33065802844
			summarizeBy: none
			sourceColumn: item_is_marketplace

			annotation SummarizationSetBy = Automatic

		column product_id_type
			dataType: int64
			formatString: 0
			lineageTag: 9ec870b6-00a5-4b56-a764-aeed49b17742
			summarizeBy: sum
			sourceColumn: product_id_type

			annotation SummarizationSetBy = Automatic

		column zshop_shipping_fee
			dataType: double
			lineageTag: 49eeacab-e5a9-4d89-aeb4-bff563e4afd2
			summarizeBy: sum
			sourceColumn: zshop_shipping_fee

			annotation SummarizationSetBy = Automatic

			annotation PBI_FormatHint = {"isGeneralNumber":true}

		column item_note
			dataType: string
			lineageTag: 0c697bdb-25d2-4eda-baf0-58110a3ef06b
			summarizeBy: none
			sourceColumn: item_note

			annotation SummarizationSetBy = Automatic

		column item_condition
			dataType: int64
			formatString: 0
			lineageTag: 49caa162-e064-44e3-8d65-03b39ed67ccf
			summarizeBy: sum
			sourceColumn: item_condition

			annotation SummarizationSetBy = Automatic

		column zshop_category1
			dataType: int64
			formatString: 0
			lineageTag: 88b15cd7-7f14-42ec-a28a-caa9cd6a3260
			summarizeBy: sum
			sourceColumn: zshop_category1

			annotation SummarizationSetBy = Automatic

		column zshop_browse_path
			dataType: int64
			formatString: 0
			lineageTag: 3372abf7-c5ec-4eb3-8e4b-2847a8860ca5
			summarizeBy: sum
			sourceColumn: zshop_browse_path

			annotation SummarizationSetBy = Automatic

		column zshop_storefront_feature
			dataType: int64
			formatString: 0
			lineageTag: b02fe3a8-1964-4c29-9398-9ce9cbc17ec8
			summarizeBy: sum
			sourceColumn: zshop_storefront_feature

			annotation SummarizationSetBy = Automatic

		column asin2
			dataType: string
			lineageTag: 07323241-9fcf-4668-8ce8-81e9f6b70fdf
			summarizeBy: none
			sourceColumn: asin2

			annotation SummarizationSetBy = Automatic

		column asin3
			dataType: string
			lineageTag: 46400c93-cd84-4220-b7af-d54190e22c68
			summarizeBy: none
			sourceColumn: asin3

			annotation SummarizationSetBy = Automatic

		column will_ship_internationally
			dataType: int64
			formatString: 0
			lineageTag: 1540b85e-4a77-4d02-ad6e-b9b2d76a5016
			summarizeBy: sum
			sourceColumn: will_ship_internationally

			annotation SummarizationSetBy = Automatic

		column expedited_shipping
			dataType: int64
			formatString: 0
			lineageTag: f42b1bb8-e16b-4200-86e9-1857dd4288f4
			summarizeBy: sum
			sourceColumn: expedited_shipping

			annotation SummarizationSetBy = Automatic

		column zshop_boldface
			dataType: int64
			formatString: 0
			lineageTag: 08bac090-fd8e-44bd-a92a-49393c0aba6f
			summarizeBy: sum
			sourceColumn: zshop_boldface

			annotation SummarizationSetBy = Automatic

		column bid_for_featured_placement
			dataType: int64
			formatString: 0
			lineageTag: 889be7ef-e63f-4d1d-9116-59b0af4372e6
			summarizeBy: sum
			sourceColumn: bid_for_featured_placement

			annotation SummarizationSetBy = Automatic

		column add_delete
			dataType: int64
			formatString: 0
			lineageTag: 52a35844-a503-455c-837a-64308c432eb4
			summarizeBy: sum
			sourceColumn: add_delete

			annotation SummarizationSetBy = Automatic

		column pending_quantity
			dataType: int64
			formatString: 0
			lineageTag: 2fd407c6-dd4b-4425-9e45-d8166eb921ce
			summarizeBy: sum
			sourceColumn: pending_quantity

			annotation SummarizationSetBy = Automatic

		column fulfillment_channel
			dataType: string
			lineageTag: dab52454-bc13-4bcf-9fc0-c254f6d254fa
			summarizeBy: none
			sourceColumn: fulfillment_channel

			annotation SummarizationSetBy = Automatic

		column merchant_shipping_group
			dataType: string
			lineageTag: c082ae6d-7f31-411f-999c-576218ae336f
			summarizeBy: none
			sourceColumn: merchant_shipping_group

			annotation SummarizationSetBy = Automatic

		column status
			dataType: string
			lineageTag: 67289bea-88a3-46c2-8b40-da0b4266d21c
			summarizeBy: none
			sourceColumn: status

			annotation SummarizationSetBy = Automatic

		column product_id
			dataType: string
			lineageTag: 41b68df8-f85d-4dd0-81a3-e13f025e8430
			summarizeBy: none
			sourceColumn: product_id

			annotation SummarizationSetBy = Automatic

		column _partneruuid
			dataType: string
			lineageTag: 5a77f79b-ede9-4319-96c8-bf703e61cdca
			summarizeBy: none
			sourceColumn: _partneruuid

			annotation SummarizationSetBy = Automatic

		partition inventory_all_listings = m
			mode: import
			source =
					let
					    Source = Odbc.DataSource("dsn=WAP", [HierarchicalNavigation=true]),
					    #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database" = Source{[Name="f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec",Kind="Database"]}[Data],
					    public_Schema = #"f6d0cde6-3cc6-40dc-bf5a-42e0ed94c6ec_Database"{[Name="public",Kind="Schema"]}[Data],
					    inventory_all_listings_View = public_Schema{[Name="inventory_all_listings",Kind="View"]}[Data],
					    #"Changed Type" = Table.TransformColumnTypes(inventory_all_listings_View,{{"_last_updated_on", type date}})
					in
					    #"Changed Type"

		annotation PBI_ResultType = Table

		annotation PBI_NavigationStepName = Navigation
```
