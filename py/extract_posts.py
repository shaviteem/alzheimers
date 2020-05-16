import xml.etree.ElementTree as ET
tree = ET.parse('../wordpress.2012-06-26.xml')
root = tree.getroot()

print(root)

# print(tree.findall('item'))

print(root.children)